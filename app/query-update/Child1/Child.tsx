import { FC } from "react";
import { getSsrQueryClient } from "../utils";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { ChildClient } from "./ChildClient";

export const Child: FC<{}> = async () => {
  const queryClient = getSsrQueryClient;
  await queryClient.prefetchQuery({
    queryKey: ["query", "a-2"],
    queryFn: async () => {
      //await new Promise((res) => setTimeout(res, 2000));
      return {
        tasks: [{ id: "-1", name: "reloaded" }],
      };
    },
    staleTime: 20 * 60 * 1000,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ChildClient />
    </HydrationBoundary>
  );
};
