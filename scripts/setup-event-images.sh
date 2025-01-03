#!/bin/bash

# Create events directory if it doesn't exist
mkdir -p public/images/events

# Download event images
curl -o "public/images/events/nirvan-diwas.webp" "https://placehold.co/800x400/FF6B35/ffffff.webp?text=Nirvan+Diwas"
curl -o "public/images/events/bodh-diwas-rampal.webp" "https://placehold.co/800x400/3B82F6/ffffff.webp?text=Bodh+Diwas+Rampal+Ji"
curl -o "public/images/events/bodh-diwas-garibdas.webp" "https://placehold.co/800x400/10B981/ffffff.webp?text=Bodh+Diwas+Garibdas+Ji"
curl -o "public/images/events/prakat-diwas.webp" "https://placehold.co/800x400/F59E0B/ffffff.webp?text=Prakat+Diwas"
curl -o "public/images/events/avtaran-diwas.webp" "https://placehold.co/800x400/8B5CF6/ffffff.webp?text=Avtaran+Diwas"
curl -o "public/images/events/yagya-diwas.webp" "https://placehold.co/800x400/EF4444/ffffff.webp?text=Yagya+Diwas"
