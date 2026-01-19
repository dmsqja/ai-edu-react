#!/bin/bash

# AI Education Backend Server Start Script

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "🚀 Starting backend server on port 80..."
java -jar edu-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod --server.port=80 > backend.log 2>&1 &

echo "✅ Backend server started!"
echo "📝 Log file: backend.log"
echo ""
echo "To check logs: tail -f backend.log"
echo "To stop server: ./stop_backend.sh"
