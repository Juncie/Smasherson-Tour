import Leaderboard from ".";

export default {
    title: "Components/Leaderboard",
    component: Leaderboard,
};

export const Template = (args) => <Leaderboard {...args} />;
Template.args = {
    data: [
        {
            rank: 1,
            name: "John Doe",
            score: 100,
            earnings: '$125'
        },
        {
            rank: 2,
            name: "Jane Doe",
            score: 90,
            earnings: '$100'
        },
        {
            rank: 3,
            name: "John Smith",
            score: -80,
            earnings: '$75'
        },
        {
            rank: 4,
            name: "Jane Smith",
            score: 70,
            earnings: '$50'
        },
        {
            rank: 5,
            name: "John Doe",
            score: 60,
            earnings: '$25'
        },
        
    ]
};