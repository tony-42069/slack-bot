# ABARE - Slack Bot 🤖

[![License: MIT](https://img.shields.io/badge/License-Proprietary-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-v18.0%2B-brightgreen)](https://nodejs.org)
[![Slack App](https://img.shields.io/badge/Slack-App-4A154B?logo=slack)](https://api.slack.com/apps)
[![Status](https://img.shields.io/badge/Status-Active-success)]()

A powerful, AI-enabled Slack bot for commercial real estate analysis, built with Node.js and the Bolt framework. Part of the ABARE (Alliance Business Advisors Real Estate) technology suite.

## 🚀 Features
- Real-time CRE property analysis
- Automated loan assessment
- Interactive message responses
- Secure socket mode communication
- Document processing capabilities
- Custom underwriting insights

## 🛠️ Tech Stack
- Node.js
- Slack Bolt Framework
- Socket Mode
- Interactive Components
- Block Kit UI

## 📋 Prerequisites
- Node.js v18.0 or higher
- Slack workspace with admin privileges
- Bot User OAuth Token
- App-Level Token
- Signing Secret

## ⚡ Quick Start
1. Clone the repository
```bash
git clone https://github.com/tony-42069/slack-bot.git

Install dependencies

bashCopynpm install

Configure environment variables in .env:

envCopySLACK_BOT_TOKEN=xoxb-your-token
SLACK_SIGNING_SECRET=your-signing-secret
SLACK_APP_TOKEN=xapp-your-token

Start the bot

bashCopynode src/app.js
🤝 Usage

Mention the bot @ABARE in any channel
Use interactive buttons for quick actions:

Analyze Property
Check Loans


Available commands:

help - Show available commands
analyze property [address] - Run property analysis
check loans [requirements] - Get loan recommendations
market data [location] - Get market insights



🔒 Security

Socket Mode for secure communications
OAuth 2.0 authentication
Encrypted environment variables
Secure token handling

🛡️ License
Proprietary - See LICENSE file for details
🔄 Updates

Added interactive buttons for property analysis
Implemented loan assessment functionality
Enhanced error handling
Improved response formatting

🤝 Contributing
Currently not accepting external contributions. For internal use only.
📞 Support
For support, please contact the development team.

Made with ⚡ by ABARE Technology