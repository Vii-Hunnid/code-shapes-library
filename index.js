// index.js

export function createRectangle(width, height, backgroundColor, borderRadius, top, left, transformOrigin) {
    const rectangle = document.createElement('div');
    rectangle.className = 'rectangle';
    rectangle.style.cssText = `
      width: ${width}px;
      height: ${height}px;
      background-color: ${backgroundColor};
      border-radius: ${borderRadius}px;
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      transform-origin: ${transformOrigin};
      transition: transform 0.3s ease-in-out;
    `;
  
    rectangle.addEventListener('mouseover', () => {
      rectangle.style.transform = 'scale(1.1)';
    });

    rectangle.addEventListener('mouseout', () => {
      rectangle.style.transform = 'scale(1)';
    });

    return rectangle;
  }

