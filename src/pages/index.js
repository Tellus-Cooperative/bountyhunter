import React, { useState, useEffect} from 'react';
import Layout from '@/components/common/Layout';
import LandingPage from '@/components/LandingPage';
import MySorobanReactProvider from '@/components/MySorbeanProvider';

const Index = () => {

  return ( 
    <MySorobanReactProvider>
     <Layout>
       <LandingPage />
     </Layout>
    </MySorobanReactProvider>
   );
}
 
export default Index;