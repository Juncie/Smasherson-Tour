import ActionButton from ".";

export default{
    title: "Components/ActionButton",
    component: ActionButton
}


export const Template = (args) => <ActionButton {...args}/>
Template.args = {
    type: "primary",
    variant: "filled",
}
