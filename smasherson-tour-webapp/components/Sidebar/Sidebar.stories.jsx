import Sidebar from ".";
import Menu from "../Menu";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

export const Default = (args) => <Sidebar {...args} />;
Default.args = {
  children: <Menu />,
};

