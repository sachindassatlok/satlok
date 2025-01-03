const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a canvas with the desired dimensions
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');

// Draw the background rectangle
ctx.fillStyle = '#F04B4B';
ctx.beginPath();
ctx.roundRect(0, 0, 200, 200, 16);
ctx.fill();

// Configure text styles
ctx.fillStyle = 'white';
ctx.textAlign = 'center';

// Draw "Satlok"
ctx.font = 'bold 42px sans-serif';
ctx.fillText('Satlok', 100, 85);

// Draw "Ashram"
ctx.font = '32px sans-serif';
ctx.fillText('Ashram', 100, 130);

// Save the image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/images/logo.png', buffer);
