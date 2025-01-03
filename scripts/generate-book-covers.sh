#!/bin/bash

# Create books directory if it doesn't exist
mkdir -p public/images/books

# Generate WebP images using base64 data
# Gyan Ganga
curl -o "public/images/books/gyan-ganga.webp" "https://dummyimage.com/800x1000/FF6B35/ffffff.webp&text=Gyan+Ganga"

# Way of Living
curl -o "public/images/books/way-of-living.webp" "https://dummyimage.com/800x1000/3B82F6/ffffff.webp&text=Way+of+Living"

# Hindu Religion is Great
curl -o "public/images/books/hindu-religion.webp" "https://dummyimage.com/800x1000/EF4444/ffffff.webp&text=Hindu+Religion+is+Great"

echo "WebP book covers generated successfully!"
