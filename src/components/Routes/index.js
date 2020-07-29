import React from "react";
import { observer } from "mobx-react";
import { Route, Switch } from "react-router";
import ProdList from "../ProdList";
import ProdDetail from "../ProdDetail";
import Home from "../Home";
import VendorList from "../VendorList";
import VendorDetail from "../VendorDetail";
import prodStore from "../../stores/prodStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/vendors/:vendorSlug">
        <VendorDetail />
      </Route>
      <Route path="/vendors">
        <VendorList />
      </Route>
      <Route path="/products/:productSlug">
        <ProdDetail />
      </Route>
      <Route path="/products">
        <ProdList products={prodStore.products} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
