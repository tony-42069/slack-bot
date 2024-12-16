require('dotenv').config();
const { App } = require('@slack/bolt');

// Initialize the Slack app
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

// Add error handling
app.error(async (error) => {
    console.error('An error occurred:', error);
});

// Basic hello handler
app.message('hello', async ({ message, say }) => {
    try {
        console.log('Received hello message from user:', message.user);
        await say(`Hey there <@${message.user}>! 👋`);
    } catch (error) {
        console.error('Error handling hello message:', error);
    }
});

// Help command
app.message('help', async ({ message, say }) => {
    await say({
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*ABARE Bot Commands:*\n\n" +
                          "• `analyze property [address]` - Run property analysis\n" +
                          "• `check loans [requirements]` - Get loan recommendations\n" +
                          "• `underwrite [property details]` - Start underwriting process\n" +
                          "• `market data [location]` - Get market insights\n"
                }
            }
        ]
    });
});

// Handle mentions
app.event('app_mention', async ({ event, say }) => {
    try {
        await say({
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `Hello <@${event.user}>! How can I assist you with your CRE analysis?`
                    }
                },
                {
                    type: "actions",
                    elements: [
                        {
                            type: "button",
                            text: {
                                type: "plain_text",
                                text: "Analyze Property"
                            },
                            action_id: "property_analysis"
                        },
                        {
                            type: "button",
                            text: {
                                type: "plain_text",
                                text: "Check Loans"
                            },
                            action_id: "loan_check"
                        }
                    ]
                }
            ]
        });
    } catch (error) {
        console.error('Error handling mention:', error);
    }
});

// Handle property analysis request
app.message(/analyze property/i, async ({ message, say }) => {
    try {
        await say(`I'll analyze that property for you. Processing...`);
        // Add property analysis logic here
    } catch (error) {
        console.error('Error in property analysis:', error);
    }
});

// Handle loan analysis request
app.message(/check loans/i, async ({ message, say }) => {
    try {
        await say(`Let me check loan options for you. One moment...`);
        // Add loan analysis logic here
    } catch (error) {
        console.error('Error in loan analysis:', error);
    }
});

// Handle button clicks
app.action('property_analysis', async ({ ack, body, say }) => {
    await ack();
    await say(`Let's analyze a property. Please provide the property address.`);
});

app.action('loan_check', async ({ ack, body, say }) => {
    await ack();
    await say(`I'll help you check loan options. Please provide your loan requirements.`);
});

// Start the app
(async () => {
    try {
        const port = 3000;
        await app.start(port);
        console.log('⚡️ ABARE Bot is running!');
        console.log('Integration status:');
        console.log('- Bot Token:', !!process.env.SLACK_BOT_TOKEN);
        console.log('- Signing Secret:', !!process.env.SLACK_SIGNING_SECRET);
        console.log('- App Token:', !!process.env.SLACK_APP_TOKEN);
    } catch (error) {
        console.error('Error starting the app:', error);
    }
})();