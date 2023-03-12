import React from 'react';
import MySorobanReactProvider from "@/components/MySorbeanProvider";
import Layout from "@/components/common/Layout";
import BountyReview from '@/components/BountyReview';

const Submission = () => {
    return ( <>
      <MySorobanReactProvider>
      <Layout>
         <BountyReview />
      </Layout>
     </MySorobanReactProvider>
    </> );
}
 
export default Submission;