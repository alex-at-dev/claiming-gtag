import { ComponentProps, FC } from 'react';
import { cx } from '../util/cx';

interface ButtonProps extends ComponentProps<'button'> {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export const Button: FC<ButtonProps> = ({ primary, secondary, className, ...props }) => {
  return (
    <button
      type="button"
      className={cx(className, 'rounded px-5 py-2 font-semibold leading-7', {
        'bg-olive-600 text-white': !!primary,
        'bg-neutral-100': !!secondary,
      })}
      {...props}
    />
  );
};
