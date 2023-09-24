import { FC } from "react";
import { getSsrQueryClient } from "../utils";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { ChildClient } from "./ChildClient";

export const Child: FC<{}> = async () => {
  const queryClient = getSsrQueryClient;
  await queryClient.prefetchQuery({
    queryKey: ["query", "c"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 2000));
      return {
        tasks: [
          { id: "1 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", name: "Task 1 c" },
          { id: 2, name: "Task 2" },
          { id: 3, name: "Task 3" },
        ],
      };
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ChildClient />
    </HydrationBoundary>
  );
};
