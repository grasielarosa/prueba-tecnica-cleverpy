import React, { FC } from "react";

import { Grid } from "./styles";
interface Props {
  children: React.ReactNode;
}

const Wrapper: FC<Props> = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export { Wrapper };
