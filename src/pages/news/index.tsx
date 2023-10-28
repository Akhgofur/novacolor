import Loading from "@/components/loading";
import Layout from "@/layout";
import NewsInner from "@/widgets/news";
import { useState, useEffect } from "react";

const News = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Layout>
        <NewsInner />
      </Layout>
    </>
  );
};

export default News;
