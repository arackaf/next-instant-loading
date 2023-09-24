import { Suspense } from "react";
import { Child } from "./Child";

const Loading = () => {
  return <div className="w-72 h-72 bg-pink-500 text-white">Loading ...</div>;
};

export default function Page() {
  return (
    // <Suspense fallback={<Loading />}>
    <Child />
    // </Suspense>
  );
}
