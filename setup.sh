#!/bin/bash

# Spoiler-Safe Reviews - Quick Start Script
# This script will help you set up and run the project

echo "🎬 Spoiler-Safe Reviews - Quick Start"
echo "======================================"
echo ""

# Check for Node.js
echo "Checking prerequisites..."
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check for npm
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Check for MongoDB
if ! command -v mongod &> /dev/null
then
    echo "⚠️  MongoDB CLI not found in PATH"
    echo "Please make sure MongoDB is installed and running"
    echo "Installation guide: https://www.mongodb.com/try/download/community"
else
    echo "✅ MongoDB found"
fi

echo ""
echo "Starting installation..."
echo ""

# Install root dependencies
echo "📦 Installing server dependencies..."
npm install

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install
cd ..

echo ""
echo "✅ Installation complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Make sure MongoDB is running:"
echo "   Run: mongod"
echo ""
echo "2. Start the application:"
echo "   Run: npm run dev"
echo ""
echo "3. Open your browser:"
echo "   Frontend: http://localhost:3000"
echo "   Backend: http://localhost:5000/api"
echo ""
echo "🎉 You're all set! Happy coding!"
echo ""
echo "For more information, check README.md or SETUP_GUIDE.md"
