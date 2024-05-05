const Tesseract = require('tesseract.js');
const fs = require('fs');

// Path to the image file
const imagePath = 'output-0.png'; // Change this to your image path

// Perform OCR on the image
Tesseract.recognize(
  imagePath,
  'eng', // English language
  { logger: m => console.log(m) } // Enable logging
).then(({ data: { text } }) => {
  console.log('Extracted Text:');
  console.log(text);
}).catch(error => {
  console.error('Error:', error.message);
});
