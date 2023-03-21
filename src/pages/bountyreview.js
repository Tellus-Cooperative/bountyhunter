import React from 'react';
import MySorobanReactProvider from "@/components/MySorbeanProvider";
import Layout from "@/components/common/Layout";
import BountyReview from '@/components/BountyReview';
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

const Submission = () => {
    return ( <>
        <ApolloProvider client={client}>
      <MySorobanReactProvider>
      <Layout>
         <BountyReview />
      </Layout>
     </MySorobanReactProvider>
     </ApolloProvider>
    </> );
}
 
export default Submission;