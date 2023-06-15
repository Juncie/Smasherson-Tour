import Slider from ".";

export default {
    title: "Components/Slider",
    component: Slider,
};

export const Main = (args) => <Slider {...args} />;
Main.args = {
    data: [
        {
            image: "https://source.unsplash.com/random/960x540/?golf",
        },
        {
            image: "https://source.unsplash.com/random/960x540/?championship",
        },
        {
            image: "https://source.unsplash.com/random/960x540/?nature",
        },
        {
            image: "https://source.unsplash.com/random/960x540/?golfclub",
        },
        {
            image: "https://source.unsplash.com/random/960x540/?sport",
        },
    ],
};