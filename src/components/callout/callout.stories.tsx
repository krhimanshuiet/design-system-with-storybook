//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    variant: 'primary',
    children: 'Lorem ipsum dolor sit In ultricies urna interdum.',
  },
  argTypes: {
    variant: {
      name: 'variant',
      control: 'select',
      options: ['primary', 'success', 'information', 'danger', 'warning'],
    },
  },
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
};

export const Information: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
};
