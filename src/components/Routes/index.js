import React from "react";
import { Route, Switch } from "react-router";
import ProdList from "../components/ProdList";
import ProdDetail from "../components/ProdDetail";
import Home from "../components/Home";
import VendorList from "../components/VendorList";
import VendorDetail from "../components/VendorDetail";
import prodStore from "../stores/prodStore";

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

export default Routes;
