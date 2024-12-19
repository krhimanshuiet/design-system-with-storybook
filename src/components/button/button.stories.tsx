import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'label',
      control: 'text',
      description: 'Text to display on the button',
    },
    disabled: {
      control: 'boolean',
      description: 'disables the button',
    },
    variant: {
      name: 'varient',
      control: 'select',
      description: 'selects varient from dropdown',
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      name: 'size',
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Destructive: Story = {
  args: {
    ...Primary.args,
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    children: 'Large Button',
    size: 'large',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;
