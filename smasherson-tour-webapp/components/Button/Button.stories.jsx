import ActionButton from "./index";

export default {
  title: "Components/ActionButton",
  component: ActionButton,
};

export const Fill = (args) => <ActionButton {...args} />;
Fill.args = {
  title: "Primary",
  variant: "fill",
  color: "#ffa500",
};

export const Outline = (args) => <ActionButton {...args} />;
Outline.args = {
  title: "Outline",
  variant: "outline",
};
export const Ghost = (args) => <ActionButton {...args} />;
Ghost.args = {
  title: "Button",
  variant: "ghost",
};
