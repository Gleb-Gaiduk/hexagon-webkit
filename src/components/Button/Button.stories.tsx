import Button, { ButtonContext } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonContext: ButtonContext.PRIMARY,
  textLabel: 'Add Primary',
  dataTest: 'primary-btn'
};

export const Secondary = Template.bind({});
Secondary.args = {
  textLabel: 'Add Secondary',
  dataTest: 'secondary-btn'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  isDisabled: true
};

export const PrimaryDisabledWithLoading = Template.bind({});
PrimaryDisabledWithLoading.args = {
  ...Primary.args,
  isLoading: true,
  isDisabled: true
};

export const PrimaryWithRoundCorners = Template.bind({});
PrimaryWithRoundCorners.args = {
  ...Primary.args,
  isRoundCorners: true
};
