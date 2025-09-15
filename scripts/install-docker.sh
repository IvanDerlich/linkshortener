#!/bin/bash
set -e

echo "=========================================="
echo "Docker Installation Script for Ubuntu"
echo "=========================================="
echo ""
echo "This script will:"
echo "  - Install Docker Engine"
echo "  - Install Docker Compose"
echo "  - Add your user to the docker group"
echo "  - Configure Docker to start automatically"
echo ""
echo "This script requires sudo privileges to:"
echo "  - Install Docker packages"
echo "  - Add user to docker group"
echo "  - Configure system services"
echo ""

# Check if running as root
if [ "$EUID" -eq 0 ] 2>/dev/null; then
    echo "❌ Please don't run this script as root. Run it as your regular user with sudo."
    exit 1
fi

# Check if Docker is already installed
if command -v docker &> /dev/null; then
    echo "⚠️  Docker is already installed. Current version:"
    docker --version 2>/dev/null || echo "Docker command found but version check failed"
    echo ""
    printf "Do you want to continue with the installation? (y/N): "
    read -r reply
    if [ "$reply" != "y" ] && [ "$reply" != "Y" ]; then
        echo "Installation cancelled."
        exit 0
    fi
fi

echo "🚀 Starting Docker installation..."
echo ""

# Download and run the official Docker installation script
echo "📥 Downloading official Docker installation script..."
TEMP_SCRIPT=$(mktemp /tmp/get-docker-XXXXXX.sh)
curl -fsSL https://get.docker.com -o "$TEMP_SCRIPT"

echo "🔍 Script downloaded to: $TEMP_SCRIPT"
echo "You can review the script contents before proceeding if you wish."
echo ""
printf "Continue with Docker installation? (y/N): "
read -r reply
if [ "$reply" != "y" ] && [ "$reply" != "Y" ]; then
    echo "❌ Installation cancelled by user."
    rm -f "$TEMP_SCRIPT"
    exit 1
fi

echo "🔧 Running Docker installation script..."
sudo sh "$TEMP_SCRIPT"

echo "📦 Installing Docker Compose..."
# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "👤 Adding current user to docker group..."
# Add current user to docker group
sudo usermod -aG docker $USER


echo ""
echo "✅ Docker installation complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Log out and log back in for group changes to take effect"
echo "  2. Test the installation with: docker --version"
echo "  3. Test Docker Compose with: docker-compose --version"
echo "  4. Run a test container with: docker run hello-world"
echo ""
echo "🔧 Docker service should start automatically on boot"
echo ""
echo "🎉 Happy containerizing!"

