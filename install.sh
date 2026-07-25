#!/usr/bin/env bash

echo "🚀 Installing dotfiles for Evan Taylor Yates..."

# Copy dotfiles to home directory
if [ -f "$HOME/dotfiles/.bash_aliases" ]; then
    cp "$HOME/dotfiles/.bash_aliases" "$HOME/.bash_aliases"
    echo "✅ Installed .bash_aliases"
fi

# Source bash aliases in .bashrc if not already done
if [ -f "$HOME/.bashrc" ] && ! grep -q "source ~/.bash_aliases" "$HOME/.bashrc"; then
    echo "" >> "$HOME/.bashrc"
    echo "# Load custom aliases" >> "$HOME/.bashrc"
    echo "if [ -f ~/.bash_aliases ]; then" >> "$HOME/.bashrc"
    echo "    source ~/.bash_aliases" >> "$HOME/.bashrc"
    echo "fi" >> "$HOME/.bashrc"
    echo "✅ Updated .bashrc to load aliases"
fi

echo "✨ Dotfiles installation complete!"
echo "🎉 Run 'hello' to test your new alias"
