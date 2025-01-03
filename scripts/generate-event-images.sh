#!/bin/bash

# Create events directory if it doesn't exist
mkdir -p public/events

# Function to create a placeholder image using convert (ImageMagick)
create_placeholder() {
    local name=$1
    local text=$2
    
    convert -size 580x420 \
    -gravity center \
    -background "rgb(255,30,30)" \
    -fill white \
    -font Arial \
    -pointsize 32 \
    label:"$text" \
    "public/events/$name.webp"
}

# Generate placeholder images for each event
create_placeholder "nirvan-diwas" "Kabir Saheb's\nNirvan Diwas 2025"
create_placeholder "bodh-diwas-rampal" "Bodh Diwas:\nSaint Rampal Ji Maharaj"
create_placeholder "bodh-diwas-garibdas" "Bodh Diwas:\nSaint Garibdas Ji Maharaj"
create_placeholder "prakat-diwas" "Prakat Diwas:\nGod Kabir Saheb"
create_placeholder "avtaran-diwas" "Avtaran Diwas:\nSaint Rampal Ji Maharaj"
create_placeholder "yagya-diwas" "Divya Dharm\nYagya Diwas"

echo "Event placeholder images have been generated in public/events/"
