import Loading from "@/components/loading";
import Layout from "../layout";
import HomeInner from "../widgets";
import { useState, useEffect } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Layout>
        <HomeInner />
      </Layout>
    </>
  );
};

export default Home;
