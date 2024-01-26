import { ComponentProps, FC } from 'react';
import { cx } from '../util/cx';

export const Textbox: FC<ComponentProps<'input'>> = ({ className, ...props }) => {
  return (
    <input
      type="text"
      className={cx(className, 'rounded border border-neutral-300 px-2 py-2')}
      {...props}
    />
  );
};
