import Link from "next/link";
import { FC } from "react";
import {useTranslation} from "react-i18next"

export interface IBreadcrumpItem {
  url: string;
  name: string;
  id: number;
}

interface BreadcrumpProps {
  data: IBreadcrumpItem[];
}

const Breadcrump: FC<BreadcrumpProps> = ({ data }) => {

    const {t} = useTranslation()

  return (
    <div className="flex items-center gap-2 py-[10px] md:py-[20px]">
      <Link
        href={"/"}
        className="block text-[#84827c] text-xl font-semibold "
      >
        {t("main")}
      </Link>
      {data.map((item) => (
        <Link
          href={item.url}
          key={item.id}
          className="flex items-center gap-2 "
        >
          <div className="w-[10px] h-[2px] bg-[#84827c]"></div>
          <span className="block text-[#84827c] text-xl font-semibold">
            {t(item.name)}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Breadcrump;
