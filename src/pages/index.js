import React, { useState, useEffect } from "react";
import Layout from "@/components/common/Layout";
import LandingPage from "@/components/LandingPage";
import MySorobanReactProvider from "@/components/MySorbeanProvider";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <MySorobanReactProvider>
        <Layout>
          <LandingPage />
        </Layout>
      </MySorobanReactProvider>
    </ApolloProvider>
  );
};

export default Index;
