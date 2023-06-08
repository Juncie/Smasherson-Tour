import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
};

export const Default = (args) => <Header {...args} />;
Default.args = {
  title: "Smasherson Tour",
  subtitle: "The best tour in the world",
  showButton: true,
  direction: "col",
};
