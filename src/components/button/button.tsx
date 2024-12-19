import { ComponentProps } from 'react';
import { variants, type ButtonVariants } from './button-variant';

export type ButttonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({
  size = 'medium',
  variant = 'primary',
  className,
  ...props
}: ButttonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};
