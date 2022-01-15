import { NextPage } from "next";
import Link from "next/link";

const app: NextPage = () => {
  return (
    <div className="">
      Hello from app
      <Link href="/" replace>
        Go to Index
      </Link>
    </div>
  );
};

export default app;
