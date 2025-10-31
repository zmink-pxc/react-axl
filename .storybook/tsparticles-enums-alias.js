// Custom re-export file for tsparticles Enums to fix react-particles-js compatibility
// tsparticles v1.43.1 uses const enums which TypeScript inlines, so we need to manually define them

module.exports = {
  // ShapeType enum values
  ShapeType: {
    char: "char",
    character: "character",
    circle: "circle",
    edge: "edge",
    image: "image",
    images: "images",
    line: "line",
    polygon: "polygon",
    square: "square",
    star: "star",
    triangle: "triangle"
  },
  // MoveDirection enum values
  MoveDirection: {
    none: "none",
    top: "top",
    topRight: "top-right",
    right: "right",
    bottomRight: "bottom-right",
    bottom: "bottom",
    bottomLeft: "bottom-left",
    left: "left",
    topLeft: "top-left"
  },
  // MoveType enum values
  MoveType: {
    path: "path",
    straight: "straight"
  },
  // OutMode enum values
  OutMode: {
    bounce: "bounce",
    bounceHorizontal: "bounce-horizontal",
    bounceVertical: "bounce-vertical",
    none: "none",
    out: "out",
    destroy: "destroy"
  },
  // InteractivityDetect enum values
  InteractivityDetect: {
    canvas: "canvas",
    parent: "parent",
    window: "window"
  },
  // HoverMode enum values
  HoverMode: {
    attract: "attract",
    bounce: "bounce",
    bubble: "bubble",
    connect: "connect",
    grab: "grab",
    light: "light",
    none: "none",
    pause: "pause",
    push: "push",
    remove: "remove",
    repulse: "repulse",
    slow: "slow",
    trail: "trail"
  },
  // ClickMode enum values
  ClickMode: {
    attract: "attract",
    bubble: "bubble",
    push: "push",
    remove: "remove",
    repulse: "repulse",
    pause: "pause",
    trail: "trail"
  },
  // DivMode enum values
  DivMode: {
    bounce: "bounce",
    bubble: "bubble",
    none: "none",
    repulse: "repulse"
  },
  // Other direction enums
  RotateDirection: {
    clockwise: "clockwise",
    counterClockwise: "counter-clockwise",
    random: "random"
  },
  TiltDirection: {
    clockwise: "clockwise",
    counterClockwise: "counter-clockwise",
    random: "random"
  },
  OutModeDirection: {
    bottom: "bottom",
    left: "left",
    right: "right",
    top: "top"
  },
  // Type enums
  DestroyType: {
    none: "none",
    max: "max",
    min: "min"
  },
  GradientType: {
    linear: "linear",
    radial: "radial",
    random: "random"
  },
  InteractorType: {
    attract: "attract",
    bounce: "bounce",
    bubble: "bubble",
    connect: "connect",
    grab: "grab",
    light: "light",
    none: "none",
    pause: "pause",
    push: "push",
    remove: "remove",
    repulse: "repulse",
    slow: "slow",
    trail: "trail"
  },
  AlterType: {
    gradient: "gradient",
    random: "random"
  },
  // Animation status
  AnimationStatus: {
    increasing: "increasing",
    decreasing: "decreasing"
  },
  // PolygonMask plugin enums
  Type: {
    inline: "inline",
    inside: "inside",
    outside: "outside",
    none: "none"
  },
  InlineArrangement: {
    equidistant: "equidistant",
    onePerPoint: "one-per-point",
    perPoint: "per-point",
    randomLength: "random-length",
    randomPoint: "random-point"
  },
  PolygonMaskMoveType: {
    path: "path",
    radius: "radius"
  }
};
