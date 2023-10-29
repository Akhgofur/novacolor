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
      <div className="h-full flex items-center justify-center py-[40px]">
        <p className="text-[30px] md:text-[40px] font-semibold text-center">404 Page Not Found</p>
      </div>
    </Layout>
  );
};

export default NotFound;
