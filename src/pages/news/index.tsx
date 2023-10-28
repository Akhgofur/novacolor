import Loading from "@/components/loading";
// import  from "@/layout";
// import  from "@/widgets/news";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const NewsInner = dynamic(() => import("@/widgets/news"))
const  Layout = dynamic(() => import("@/layout"))

const News = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <NewsInner />
      </Layout>
    </Suspense>
  );
};

export default News;
