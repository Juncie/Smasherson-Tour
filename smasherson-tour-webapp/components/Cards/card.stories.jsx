import Card from ".";

export default {
  title: "Components/Cards",
  component: Card,
};

export const BoxedCard = (args) => <Card {...args} />;
BoxedCard.args = {
  image: "https://picsum.photos/300/200",
  title: "Long Drive Championship Round",
  description: "May 6, 2023",
  type: "boxed",
};

export const FilledCard = (args) => <Card {...args} />;
FilledCard.args = {
  image:
    "https://c4.wallpaperflare.com/wallpaper/600/605/110/golf-high-resolution-desktop-backgrounds-wallpaper-preview.jpg",
  title: "Golf Tour",
  description: "Event Description",
  type: "filled",
};
