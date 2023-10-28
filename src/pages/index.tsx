import Loading from "@/components/loading";
// import Layout from '../layout'
// import HomeInner from '../widgets'
import { Suspense, useEffect, useState, lazy } from "react";
import dynamic from "next/dynamic";

const HomeInner = lazy(() => import("@/widgets"));
const Layout = lazy(() => import("@/layout"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Layout>
          <HomeInner />
        </Layout>
      </Suspense>
    </>
  );
};

export default Home;
