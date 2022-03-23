import Heading from './Heading';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Headings',
  component: Heading,
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#2B3934' }
      ]
    }
  }
} as ComponentMeta<typeof Heading>;

export const Headings = () => (
  <div>
    <Heading htmlTag='h1' styleType='h1'>
      Adaptive heading 1
    </Heading>

    <Heading htmlTag='h2' styleType='h2'>
      Adaptive heading 2
    </Heading>

    <Heading htmlTag='h3' styleType='h3'>
      Adaptive heading 3
    </Heading>

    <Heading htmlTag='h4' styleType='h4'>
      Adaptive heading 4
    </Heading>

    <Heading htmlTag='h5' styleType='h5'>
      Adaptive heading 5
    </Heading>

    <Heading htmlTag='h6' styleType='h6'>
      Adaptive heading 6
    </Heading>
  </div>
);
