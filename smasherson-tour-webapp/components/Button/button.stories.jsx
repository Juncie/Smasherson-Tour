import ActionButton from "./index";

export default {
    title: "Components/ActionButton",
    component: ActionButton,
    argTypes: {
        label: { control: "text" },
        onClick: { action: "clicked" },
    },
};

export const Button = (args) => <ActionButton {...args} />;