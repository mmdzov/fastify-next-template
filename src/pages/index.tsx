import { NextPage } from "next";
import Link from "next/link";

const index: NextPage = () => {
  return (
    <div className="">
      Hello world
      <Link href="/app" replace>
        Go to App
      </Link>
    </div>
  );
};

export default index;
