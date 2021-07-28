import React from "react";
import { Route, withRouter } from "react-router-dom";

import ItemPage from "./ItemPage";
import ProductPage from "./ProductPage";

const ShopPage = (props) => {
  const { match } = props;

  return (
    <>
      <Route exact path={"/:category"} component={ProductPage} />
      <Route path={`${match.path}/:item`} component={ItemPage} />
    </>
  );
};

export default withRouter(ShopPage);
