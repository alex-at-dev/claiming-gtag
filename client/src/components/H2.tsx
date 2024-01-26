import { ComponentProps, FC } from 'react';
import { cx } from '../util/cx';

export const H2: FC<ComponentProps<'h2'>> = (props) => {
  return <h2 {...props} className={cx(props.className, 'text-3xl font-bold')} />;
};
