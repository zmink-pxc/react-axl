/**
 * Minimal particle engine for rendering squares with physics
 * Replaces tsparticles dependency with lightweight custom implementation
 */
export class ParticleEngine {
  /**
   * @param {HTMLCanvasElement} canvas - Canvas element to render on
   * @param {Object} config - Configuration object
   * @param {number} config.particleCount - Initial number of particles
   * @param {number} config.particleSize - Base particle size
   * @param {number} config.velocitySpeed - Base velocity speed
   * @param {string[]} config.colors - Array of color strings
   * @param {number} config.clickAddCount - Number of particles to add on click
   */
  constructor(canvas, config = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationFrameId = null;
    this.isRunning = false;

    // Configuration with defaults
    this.config = {
      particleCount: config.particleCount || 50,
      particleSize: config.particleSize || 28,
      velocitySpeed: config.velocitySpeed || 1,
      colors: config.colors || ['#1522f2'],
      clickAddCount: config.clickAddCount || 4,
      opacity: config.opacity || 0.5,
      direction: config.direction || 'top', // 'top' means upward movement
      ...config
    };

    // High DPI support (retina detection)
    this.devicePixelRatio = window.devicePixelRatio || 1;
    this.resize();

    // Initialize particles
    this.initParticles();
  }

  /**
   * Handle canvas resize and set up high DPI rendering
   */
  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width || 800; // Fallback for initial render
    const height = rect.height || 600; // Fallback for initial render
    
    // Set canvas size accounting for device pixel ratio
    this.canvas.width = width * this.devicePixelRatio;
    this.canvas.height = height * this.devicePixelRatio;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    
    // Reset transform and set scale (prevents accumulation)
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.devicePixelRatio, this.devicePixelRatio);
    
    this.width = width;
    this.height = height;
  }

  /**
   * Create a single particle
   * @param {number} x - X position (optional, random if not provided)
   * @param {number} y - Y position (optional, random if not provided)
   * @returns {Object} Particle object
   */
  createParticle(x = null, y = null) {
    const size = this.config.particleSize * (0.5 + Math.random() * 0.5); // Random size variation
    const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
    const opacity = this.config.opacity * (0.5 + Math.random() * 0.5); // Random opacity variation

    // Velocity direction: truly random in all directions
    const angle = Math.random() * Math.PI * 2; // Random angle from 0 to 2π (full circle)
    const speed = this.config.velocitySpeed * (0.5 + Math.random() * 0.5); // Random speed variation

    return {
      x: x !== null ? x : Math.random() * this.width,
      y: y !== null ? y : Math.random() * this.height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size,
      color,
      opacity,
      active: true
    };
  }

  /**
   * Initialize particles array
   */
  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.config.particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  /**
   * Add a single particle at specific coordinates
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   */
  addParticle(x, y) {
    this.particles.push(this.createParticle(x, y));
  }

  /**
   * Add multiple particles at click location
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} count - Number of particles to add (defaults to config.clickAddCount)
   */
  addParticlesAt(x, y, count = null) {
    const addCount = count || this.config.clickAddCount;
    for (let i = 0; i < addCount; i++) {
      // Add slight random offset so particles don't all spawn at exact same point
      const offsetX = x + (Math.random() - 0.5) * 20;
      const offsetY = y + (Math.random() - 0.5) * 20;
      this.addParticle(offsetX, offsetY);
    }
  }

  /**
   * Create a particle entering from a random edge
   * @returns {Object} Particle object starting outside viewport
   */
  createEnteringParticle() {
    const size = this.config.particleSize * (0.5 + Math.random() * 0.5);
    const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
    const opacity = this.config.opacity * (0.5 + Math.random() * 0.5);
    const speed = this.config.velocitySpeed * (0.5 + Math.random() * 0.5);

    // Choose a random edge (0=top, 1=right, 2=bottom, 3=left)
    const edge = Math.floor(Math.random() * 4);
    let x, y, vx, vy;

    if (edge === 0) {
      // Top edge - enter from above
      x = Math.random() * this.width;
      y = -this.config.particleSize;
      const angle = Math.random() * Math.PI; // Pointing downward (0 to π)
      vx = Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    } else if (edge === 1) {
      // Right edge - enter from right
      x = this.width + this.config.particleSize;
      y = Math.random() * this.height;
      const angle = (Math.PI / 2) + (Math.random() * Math.PI); // Pointing leftward (π/2 to 3π/2)
      vx = Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    } else if (edge === 2) {
      // Bottom edge - enter from below
      x = Math.random() * this.width;
      y = this.height + this.config.particleSize;
      const angle = Math.PI + (Math.random() * Math.PI); // Pointing upward (π to 2π)
      vx = Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    } else {
      // Left edge - enter from left
      x = -this.config.particleSize;
      y = Math.random() * this.height;
      const angle = (3 * Math.PI / 2) + (Math.random() * Math.PI); // Pointing rightward (3π/2 to 5π/2, wrapped)
      vx = Math.cos(angle) * speed;
      vy = Math.sin(angle) * speed;
    }

    return {
      x,
      y,
      vx,
      vy,
      size,
      color,
      opacity,
      active: true
    };
  }

  /**
   * Update particle positions based on velocity
   * Maintains target particle count by spawning new particles when old ones exit
   */
  update() {
    let removedCount = 0;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];

      if (!particle.active) {
        this.particles.splice(i, 1);
        removedCount++;
        continue;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Remove particles that exit bounds (out_mode: "out", bounce: false)
      if (
        particle.x + particle.size < 0 ||
        particle.x - particle.size > this.width ||
        particle.y + particle.size < 0 ||
        particle.y - particle.size > this.height
      ) {
        particle.active = false;
        removedCount++;
      }
    }

    // Maintain target particle count by spawning new particles entering from edges
    const currentCount = this.particles.length;
    const targetCount = this.config.particleCount;
    
    if (currentCount < targetCount) {
      const needed = targetCount - currentCount;
      for (let i = 0; i < needed; i++) {
        this.particles.push(this.createEnteringParticle());
      }
    }
  }

  /**
   * Render all particles as squares
   */
  render() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw each particle as a square
    for (const particle of this.particles) {
      if (!particle.active) continue;

      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = particle.color;
      
      // Draw square centered at particle position
      const halfSize = particle.size / 2;
      this.ctx.fillRect(
        particle.x - halfSize,
        particle.y - halfSize,
        particle.size,
        particle.size
      );
      
      this.ctx.restore();
    }
  }

  /**
   * Animation loop
   */
  animate() {
    if (!this.isRunning) return;

    this.update();
    this.render();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  /**
   * Start the animation loop
   */
  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.animate();
  }

  /**
   * Stop the animation loop
   */
  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  /**
   * Clean up resources
   */
  destroy() {
    this.stop();
    this.particles = [];
  }
}

