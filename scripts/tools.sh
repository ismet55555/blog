#!/bin/bash

# Resize and convert image within a directory using ImageMagik
for img in *.{jpg,png}; do
  convert "$img" -resize x600 -quality 85 "${img%.*}.webp" && rm "$img"
done
