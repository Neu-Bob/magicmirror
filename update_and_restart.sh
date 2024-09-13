#!/bin/bash

# Change to the MagicMirror config directory
cd /home/bob/MagicMirror/config

# Pull the latest changes from GitHub
git_output=$(git pull origin main)

# Check if the git pull resulted in changes
if echo "$git_output" | grep -q 'Already up to date.'; then
    echo "No updates available, MagicMirror will not be restarted."
else
    echo "Updates pulled, restarting MagicMirror."
    # Restart MagicMirror
    pm2 restart mm
fi
