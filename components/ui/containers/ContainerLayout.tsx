import { NextComponentType } from "next";
import { ReactElement } from "react";

type Container = {
  children: ReactElement;
};
const ContainerLayout: NextComponentType<Container> = ({ children }) => {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex flex-col justify-between h-screen">{children}</div>
    </div>
  );
};

export default ContainerLayout;
