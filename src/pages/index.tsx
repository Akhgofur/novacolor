import Loading from "@/components/loading";
// import Layout from '../layout'
// import HomeInner from '../widgets'
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HomeInner = dynamic(() => import("@/widgets"), { ssr: false });
const Layout = dynamic(() => import("@/layout"), { ssr: false });

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
