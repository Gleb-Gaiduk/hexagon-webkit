import Button, { ButtonContext } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#2B3934' }
      ]
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  textLabel: 'Primary',
  dataTest: 'primary-btn'
};

export const SecondaryOnLight = Template.bind({});
SecondaryOnLight.args = {
  textLabel: 'Secondary Light',
  dataTest: 'secondary-btn',
  buttonContext: ButtonContext.SECONDARY_ON_LIGHT
};

export const SecondaryOnDark = Template.bind({});
SecondaryOnDark.args = {
  textLabel: 'Secondary Dark',
  dataTest: 'secondary-btn',
  buttonContext: ButtonContext.SECONDARY_ON_DARK
};
SecondaryOnDark.decorators = [
  Story => (
    <div style={{ background: '#2B3934', padding: '15px' }}>
      <Story />
    </div>
  )
];

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
