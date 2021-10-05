import type { ReactElement } from "react";
import { NextComponentType } from "next";

import Navbar from "components/ui/Navbar";
import Footer from "components/ui/Footer";
import { ContainerLayout } from "components/ui/containers";

type Layout = {
  children: ReactElement;
};

const DefaultLayout: NextComponentType<Layout> = ({ children }) => {
  return (
    <ContainerLayout>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ContainerLayout>
  );
};

export default DefaultLayout;
