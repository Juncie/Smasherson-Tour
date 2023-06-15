import Video from ".";

export default {
    title: "Components/Video",
    component: Video,
};

export const Template = (args) => <Video {...args} />;
Template.args = {
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
};

