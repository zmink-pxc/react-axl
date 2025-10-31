import React, { useRef, useEffect } from 'react';
import styles from './PLCnextBackground.module.scss';
import { ParticleEngine } from './ParticleEngine';

/**
 * PLCnextBackground Component
 * Renders animated square particles with physics using a lightweight custom engine
 */
export default function PLCnextBackground(props) {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get colors from SCSS module
    const colors = [
      styles.colorPistachio,
      styles.colorNeptune,
      styles.colorDownriver,
      styles.colorWaterloo,
      styles.colorAlto
    ];

    // Ensure canvas has dimensions before initializing
    // Use requestAnimationFrame to ensure layout has happened
    const initEngine = () => {
      // Initialize particle engine
      const engine = new ParticleEngine(canvas, {
        particleCount: 50,
        particleSize: 28,
        velocitySpeed: 1,
        colors,
        clickAddCount: 4,
        opacity: 0.5,
        direction: 'top'
      });

      engineRef.current = engine;
      engine.start();
    };

    // Wait for next frame to ensure canvas is laid out
    requestAnimationFrame(initEngine);

    // Handle canvas click to add particles
    const handleClick = (e) => {
      if (!engineRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      engineRef.current.addParticlesAt(x, y);
    };

    canvas.addEventListener('click', handleClick);

    // Handle window resize
    const handleResize = () => {
      if (engineRef.current) {
        engineRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (engineRef.current) {
        engineRef.current.destroy();
        engineRef.current = null;
      }
    };
  }, []);

  // Handle container resize (if size changes via props/styles)
  useEffect(() => {
    if (engineRef.current && containerRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (engineRef.current) {
          engineRef.current.resize();
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const { className, style, ...rest } = props;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        overflow: 'hidden',
        ...style
      }}
      {...rest}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          willChange: 'transform'
        }}
      />
    </div>
  );
}