import { cva, type VariantProps } from 'class-variance-authority';

export type CallOutVariants = VariantProps<typeof variants>;
// const variations = ['primary', 'danger', 'success', 'warning', 'information'] as const;

// type Variations = (typeof variations)[number];

const variant = {
  primary: [
    'bg-primary-400',
    'border-primary-500',
    'text-primary-900',
    'dark:bg-primary-800',
    'dark:border-primary-900',
    'dark:text-primary-50',
  ],
  information: [
    'bg-information-400',
    'border-information-500',
    'text-information-900',
    'dark:bg-information-800',
    'dark:border-information-900',
    'dark:text-information-50',
  ],
  success: [
    'bg-success-400',
    'border-success-500',
    'text-success-900',
    'dark:bg-success-800',
    'dark:border-success-900',
    'dark:text-success-50',
  ],
  danger: [
    'bg-danger-400',
    'border-danger-500',
    'text-danger-900',
    'dark:bg-danger-800',
    'dark:border-danger-900',
    'dark:text-danger-50',
  ],
  warning: [
    'bg-warning-400',
    'border-warning-500',
    'text-warning-900',
    'dark:bg-warning-800',
    'dark:border-warning-900',
    'dark:text-warning-50',
  ],
};

export const variants = cva(['p-4', 'rounded-lg', 'border', 'shadow-md', 'space-y-8'], {
  variants: {
    variant: {
      variant,
    },
  },
});
