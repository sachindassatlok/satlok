#!/bin/bash

# Create books directory if it doesn't exist
mkdir -p public/images/books

# Download book cover images with proper styling
curl -o "public/images/books/gyan-ganga-english.webp" "https://placehold.co/800x1000/FF6B35/ffffff.webp?text=Gyan+Ganga"
curl -o "public/images/books/way-of-living-english.webp" "https://placehold.co/800x1000/3B82F6/ffffff.webp?text=Way+of+Living"
curl -o "public/images/books/hindu-religion-english.webp" "https://placehold.co/800x1000/10B981/ffffff.webp?text=Hindu+Religion+is+Great"
