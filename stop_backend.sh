#!/bin/bash

# AI Education Backend Server Stop Script

echo "🛑 Stopping backend server..."

# Find and kill the process
PID=$(ps aux | grep "edu-0.0.1-SNAPSHOT.jar" | grep -v grep | awk '{print $2}')

if [ -z "$PID" ]; then
    echo "❌ No backend server running"
else
    kill $PID
    echo "✅ Backend server stopped (PID: $PID)"
fi
