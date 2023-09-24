import { Suspense } from "react";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { Child } from "./Child";

const Loading = () => {
  return <div className="w-72 h-72 bg-pink-500 text-white">Loading ...</div>;
};

const getSsrQueryClient = () => new QueryClient();

export default async function Page() {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  // const queryClient = getSsrQueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["query", "a"],
  //   queryFn: async () => {
  //     return {
  //       tasks: [
  //         { id: 1, name: "Task 1" },
  //         { id: 2, name: "Task 2" },
  //         { id: 3, name: "Task 3" },
  //       ],
  //     };
  //   },
  // });

  return (
    //<Suspense fallback={<Loading />}>
    //<HydrationBoundary state={dehydrate(queryClient)}>
    <Child />
    //</HydrationBoundary>
    //</Suspense>
  );
}
