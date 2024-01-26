import { ComponentProps, FC } from 'react';
import { cx } from '../util/cx';

export const H3: FC<ComponentProps<'h3'>> = (props) => {
  return <h3 {...props} className={cx(props.className, 'text-2xl font-bold')} />;
};
