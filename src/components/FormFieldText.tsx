import { ComponentProps, FC } from 'react';
import { cx } from '../util/cx';
import { FormField } from './FormField';
import { Textbox } from './Textbox';

interface FormFieldTextProps extends ComponentProps<'input'> {
  label?: string;
  description?: string;
}

export const FormFieldText: FC<FormFieldTextProps> = ({
  label,
  description,
  required,
  className,
  ...props
}) => {
  return (
    <FormField {...{ label, description, required }} className={cx(className)}>
      <Textbox required={required} {...props} className="mt-3 w-full" />
    </FormField>
  );
};
