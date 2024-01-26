// index.js

function createRectangle(width, height, backgroundColor, borderRadius, top, left, transformOrigin) {
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
    
    rectangle.addEventListener('mouseover', () => {
      rectangle.style.transform = 'scale(1.1)';
    });
  
    rectangle.addEventListener('mouseout', () => {
      rectangle.style.transform = 'scale(1)';
    });
  
    return rectangle;
  }
  
  module.exports = {
    createRectangle,
  };
  