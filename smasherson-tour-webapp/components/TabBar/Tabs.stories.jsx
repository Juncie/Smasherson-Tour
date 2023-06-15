import TabBar from ".";
import Leaderboard from "../Leaderboard";

export default {
    title: "Components/Tabs",
    component: TabBar,
};

const data1 = [
    {rank: 1, name: "John Doe", score: 100, earnings: 1000},
    {rank: 2, name: "John Doe", score: 100, earnings: 1000},
    {rank: 3, name: "John Doe", score: 100, earnings: 1000},
    {rank: 4, name: "John Doe", score: 100, earnings: 1000},
    {rank: 5, name: "John Doe", score: 100, earnings: 1000},
],

data2 = [
    {rank: 1, name: "Mane Dork", score: 100, earnings: 2000},
    {rank: 2, name: "Mane Dork", score: 100, earnings: 2000},
    {rank: 3, name: "Mane Dork", score: 100, earnings: 1000},
    {rank: 4, name: "Mane Dork", score: 100, earnings: 1000},
    {rank: 5, name: "Mane Dork", score: 100, earnings: 1000},
]

export const Template = (args) => <TabBar {...args} />;
Template.args = {
    tabs: [
        { title: "3 HOLE TOURNAMENT", component: <Leaderboard data={data1} title="3 HOLE TOURNAMENT" />},
        { title: "CLOSTEST TO THE PIN", component: <Leaderboard data={data2} title="CLOSTEST TO THE PIN" />},
        { title: "WEST COAST", component: <Leaderboard data={data1} title="WEST COAST" />},
        { title: "EAST COAST", component: <Leaderboard data={data2} title="EAST COAST" />},
]
};
      

