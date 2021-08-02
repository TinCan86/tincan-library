// src/component/Button/Button.stories.tsx
import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Link, LinkProps } from "./Link";

export default {
  title: "Link",
  component: Link,
  description: `A Link.`,
  argTypes: {
    color: { control: "color" },
    to: { control: "string" },
    targetPath: { control: "string" },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<LinkProps> = (args) => (
  <Link {...args}>Default Link</Link>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const TargetPathLink = Template.bind({});
TargetPathLink.args = {
  targetPath: "_blank",
  color: "hotpink",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  color: "hotpink",
};
