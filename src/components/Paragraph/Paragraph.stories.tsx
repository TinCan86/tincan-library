// src/component/Button/Button.stories.tsx
import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Paragraph, ParagraphProps } from "./Paragraph";

export default {
  title: "Paragraph",
  component: Paragraph,
  description: `A Paragraph.`,
  argTypes: {
    bold: { control: "boolean" },
    center: { control: "boolean" },
    color: { control: "string" },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ParagraphProps> = (args) => (
  <Paragraph {...args}>Default Paragraph</Paragraph>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const CenterParagraph = Template.bind({});
CenterParagraph.args = {
  center: true,
};

export const ColorParagraph = Template.bind({});
ColorParagraph.args = {
  color: "hotpink",
};

export const BoldParagraph = Template.bind({});
BoldParagraph.args = {
  bold: true,
};
