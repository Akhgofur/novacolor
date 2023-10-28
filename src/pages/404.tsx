import Layout from "@/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <Layout>
      <div className="absolute top-[50%] left-0 w-full text-center text-[40px] font-semibold">
        404 Page Not Found
      </div>
    </Layout>
  );
};

export default NotFound;
