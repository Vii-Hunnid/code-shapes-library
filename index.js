// index.js

// Function to create a rectangle
export function createRectangle({
    width = 100,
    height = 50,
    backgroundColor = 'blue',
    borderRadius = 10,
    top = 0,
    left = 0,
    transformOrigin = 'center center',
    hoverScale = 1.1,
    transitionDuration = '0.3s',
  }) {
    const rectangle = document.createElement('div');
    rectangle.className = 'rectangle';
    rectangle.style.width = width + 'px';
    rectangle.style.height = height + 'px';
    rectangle.style.backgroundColor = backgroundColor;
    rectangle.style.borderRadius = borderRadius + 'px';
    rectangle.style.position = 'absolute';
    rectangle.style.top = top + 'px';
    rectangle.style.left = left + 'px';
    rectangle.style.transformOrigin = transformOrigin;
    rectangle.style.transition = `transform ${transitionDuration} ease-in-out`;
  
    rectangle.addEventListener('mouseover', () => {
      rectangle.style.transform = `scale(${hoverScale})`;
    });
  
    rectangle.addEventListener('mouseout', () => {
      rectangle.style.transform = 'scale(1)';
    });
  
    return rectangle;
  }
  
  // Function to create a circle
  export function createCircle({
    diameter = 50,
    backgroundColor = 'red',
    top = 0,
    left = 0,
    hoverScale = 1.1,
    transitionDuration = '0.3s',
  }) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = diameter + 'px';
    circle.style.height = diameter + 'px';
    circle.style.backgroundColor = backgroundColor;
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.top = top + 'px';
    circle.style.left = left + 'px';
    circle.style.transition = `transform ${transitionDuration} ease-in-out`;
  
    circle.addEventListener('mouseover', () => {
      circle.style.transform = `scale(${hoverScale})`;
    });
  
    circle.addEventListener('mouseout', () => {
      circle.style.transform = 'scale(1)';
    });
  
    return circle;
  }
  
// index.js

export function createCustomIsoscelesTriangle({
    base = 100,
    height = 80,
    backgroundColor = 'green',
    top = 0,
    left = 0,
    transformOrigin = 'center bottom',
    hoverScale = 1.1,
    transitionDuration = '0.3s',
    content = '',
  }) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    canvas.width = base;
    canvas.height = height;
  
    context.fillStyle = backgroundColor;
    context.beginPath();
    context.moveTo(base / 2, 0);
    context.lineTo(base, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  
    // Draw content on the canvas
    const contentWrapper = document.createElement('div');
    contentWrapper.innerHTML = content;
  
    const contentImage = new Image();
    contentImage.src = `data:image/svg+xml,${encodeURIComponent(contentWrapper.outerHTML)}`;
  
    context.drawImage(contentImage, 0, 0);
  
    canvas.style.position = 'absolute';
    canvas.style.top = top + 'px';
    canvas.style.left = left + 'px';
    canvas.style.transformOrigin = transformOrigin;
    canvas.style.transition = `transform ${transitionDuration} ease-in-out`;
  
    canvas.addEventListener('mouseover', () => {
      canvas.style.transform = `scale(${hoverScale})`;
    });
  
    canvas.addEventListener('mouseout', () => {
      canvas.style.transform = 'scale(1)';
    });
  
    return canvas;
  }  
  
  module.exports = {
    createCircle,
    createRectangle,
    createCustomIsoscelesTriangle,
  };
  