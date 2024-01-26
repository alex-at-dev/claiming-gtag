import { FC, HTMLProps } from 'react';

export const H1: FC<HTMLProps<HTMLHeadingElement>> = (props) => {
  return <h1 {...props} />;
};
