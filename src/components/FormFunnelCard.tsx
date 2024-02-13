import { FC, PropsWithChildren } from 'react';

export const FormFunnelCard: FC<PropsWithChildren> = (props) => {
  return (
    <div className="w-full max-w-md bg-white p-5 shadow-xl xs:rounded-md xs:p-10" {...props} />
  );
};
