import React, { Fragment } from "react";

import Header from "../Header/Header";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
    </Fragment>
  );
};

export default Layout;
