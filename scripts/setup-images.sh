#!/bin/bash

# Create necessary directories
mkdir -p public/images/books

# Download placeholder images if they don't exist
if [ ! -f "public/images/books/way-of-living-english.webp" ]; then
  curl -o "public/images/books/way-of-living-english.webp" "https://placehold.co/800x1000/e2e8f0/1e293b.webp?text=Way+of+Living"
fi

if [ ! -f "public/images/books/hindu-religion-english.webp" ]; then
  curl -o "public/images/books/hindu-religion-english.webp" "https://placehold.co/800x1000/e2e8f0/1e293b.webp?text=Hindu+Religion"
fi
