import { Link, LinkProps } from 'react-router-dom';
import { cx } from '../util/cx';

export const LinkInline: React.FC<LinkProps> = ({ className, ...props }) => {
  return <Link className={cx(className, 'underline')} {...props} />;
};
