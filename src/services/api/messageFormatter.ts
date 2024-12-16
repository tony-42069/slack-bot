// src/services/messageFormatter.ts
export const formatPropertyAnalysis = (analysis: any) => {
    return {
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "Property Analysis Results"
                }
            },
            {
                type: "section",
                fields: [
                    {
                        type: "mrkdwn",
                        text: `*Value:*\n$${analysis.value.toLocaleString()}`
                    },
                    {
                        type: "mrkdwn",
                        text: `*Cap Rate:*\n${analysis.capRate}%`
                    }
                ]
            },
            // Add more blocks as needed
        ]
    };
};

export const formatLoanAnalysis = (analysis: any) => {
    return {
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "Loan Analysis Results"
                }
            },
            {
                type: "section",
                fields: [
                    {
                        type: "mrkdwn",
                        text: `*Recommended Loan Amount:*\n$${analysis.loanAmount.toLocaleString()}`
                    },
                    {
                        type: "mrkdwn",
                        text: `*DSCR:*\n${analysis.dscr}`
                    }
                ]
            }
        ]
    };
};