// index.js

function createRectangle({
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
  
  module.exports = {
    createRectangle,
  };
  