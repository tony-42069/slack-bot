const handleInteractiveWelcome = async ({ event, say }) => {
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
        console.error('Error handling interactive welcome:', error);
    }
};

module.exports = { handleInteractiveWelcome };