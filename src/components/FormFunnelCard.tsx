import { FC, PropsWithChildren } from 'react';

export const FormFunnelCard: FC<PropsWithChildren> = (props) => {
  return (
    <div className="xs:p-10 xs:rounded-md w-full max-w-md bg-white p-5 shadow-xl" {...props} />
  );
};
