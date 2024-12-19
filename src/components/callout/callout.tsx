import type { PropsWithChildren } from 'react';
import { variants, type CallOutVariants } from './callout.variants';

type CalloutProps = PropsWithChildren<CallOutVariants & { title: string }>;
export const Callout: React.FC<CalloutProps> = ({ children, title, variant }) => {
  return (
    <div className={variants({ variant })}>
      <h2 className="font-semibold">{title}</h2>
      <p>{children}</p>
    </div>
  );
};
