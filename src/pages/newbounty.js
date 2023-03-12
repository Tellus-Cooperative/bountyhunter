import React from "react";
import Layout from "@/components/common/Layout";
import NewBounty from "@/components/NewBounty";
import MySorobanReactProvider from "@/components/MySorbeanProvider";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

const Bounty = () => {
  return (
    <ApolloProvider client={client}>
      <MySorobanReactProvider>
        <Layout>
          <NewBounty />
        </Layout>
      </MySorobanReactProvider>
    </ApolloProvider>
  );
};

export default Bounty;
