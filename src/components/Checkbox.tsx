import { ComponentProps, FC, useState } from 'react';

export const Checkbox: FC<ComponentProps<'input'>> = ({ id, children, ...props }) => {
  const [id_safe] = useState(id || props.name || 'el-' + Math.random());
  return (
    <>
      <input id={id_safe} type="checkbox" className="hidden" {...props} />
      <label htmlFor={id_safe} className="checkbox-label">
        {children}
      </label>
    </>
  );
};
