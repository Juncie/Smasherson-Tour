import ActionButton from "./index";

export default {
  title: "Components/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
};

export const Basic = (args) => <ActionButton {...args} />;
Basic.args = {
  label: "Do Something",
};
