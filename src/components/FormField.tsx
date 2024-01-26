import { ComponentProps, FC } from 'react';
import { cx } from '../util/cx';
import { H3 } from './H3';

interface FormFieldProps extends ComponentProps<'label'> {
  name?: string;
  label?: string;
  description?: string;
  required?: boolean;
}

export const FormField: FC<FormFieldProps> = ({
  name,
  label,
  description,
  required,
  className,
  children,
  ...props
}) => {
  return (
    <label {...props} className={cx(className, 'block')}>
      <H3>
        {label || name || 'UNKNOWN FIELD'} {required && <span className="text-red-600">*</span>}
      </H3>
      {description && <p className="text-neutral-500">{description}</p>}
      {children}
    </label>
  );
};
