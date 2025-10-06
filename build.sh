#!/bin/bash
# Path: build.sh
# Purpose: Build script for Unix-like systems to compile TypeScript and prepare the extension

echo "Building Edge Feed Enhancer..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Compile TypeScript
echo "Compiling TypeScript..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo ""
    echo "Next steps:"
    echo "1. Open Edge and navigate to edge://extensions/"
    echo "2. Enable 'Developer mode'"
    echo "3. Click 'Load unpacked'"
    echo "4. Select this folder: $(pwd)"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi

