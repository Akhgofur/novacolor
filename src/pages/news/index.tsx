import Loading from "@/components/loading";
// import  from "@/layout";
// import  from "@/widgets/news";
import { Suspense, lazy } from "react";

const NewsInner = lazy(() => import("@/widgets/news"))
const  Layout = lazy(() => import("@/layout"))

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
