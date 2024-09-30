// script.js
function drawRectangles() {
    const container = document.getElementById('container');
    const marginInput = document.getElementById('marginInput');
    const margin = parseInt(marginInput.value, 10) || 0; // Default to 0 if no input

    // Clear previous rectangles
    container.innerHTML = '';

    // Create the outer rectangle
    const outerRect = document.createElement('div');
    outerRect.className = 'rectangle';
    outerRect.style.width = '300px'; // Adjust width as needed
    outerRect.style.height = '200px'; // Adjust height as needed
    outerRect.style.top = `${margin}px`;
    outerRect.style.left = `${margin}px`;
    outerRect.style.boxSizing = 'border-box';
    container.appendChild(outerRect);

    // Create the inner rectangle
    const innerRect = document.createElement('div');
    innerRect.className = 'rectangle';
    innerRect.style.width = '100px'; // Adjust width as needed
    innerRect.style.height = '100px'; // Adjust height as needed
    innerRect.style.top = `${margin * 2}px`;
    innerRect.style.left = `${margin * 2}px`;
    innerRect.style.boxSizing = 'border-box';
    container.appendChild(innerRect);
}
