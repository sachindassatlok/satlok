#!/bin/bash

# Create books directory if it doesn't exist
mkdir -p public/images/books

# Download book cover images
echo "Downloading Gyan Ganga cover..."
curl -o "public/images/books/gyan-ganga.png" "https://source.unsplash.com/800x1000/?book,spiritual,orange" 

echo "Downloading Way of Living cover..."
curl -o "public/images/books/way-of-living.png" "https://source.unsplash.com/800x1000/?book,life,blue"

echo "Downloading Hindu Religion cover..."
curl -o "public/images/books/hindu-religion.png" "https://source.unsplash.com/800x1000/?book,religion,red"

echo "Book covers downloaded successfully!"
