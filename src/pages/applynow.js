import React from "react";
import ApplyNow from "@/components/Apply";
import Layout from "../components/common/Layout/index";
import MySorobanReactProvider from "@/components/MySorbeanProvider";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

const ApplyNowPage = () => {
  return (
    <ApolloProvider client={client}>
    <MySorobanReactProvider>
      <Layout>
        <ApplyNow />
      </Layout>
    </MySorobanReactProvider>
    </ApolloProvider>
  );
};

export default ApplyNowPage;
