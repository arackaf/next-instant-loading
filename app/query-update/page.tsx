import { Hydrate, QueryClient, dehydrate } from "@tanstack/react-query";
import { Child } from "./Child1/Child";

export const getSsrQueryClient = () => new QueryClient();

export default async function Page() {
  const queryClient = getSsrQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["query", "a-1"],
    queryFn: async () => {
      return {
        tasks: [
          { id: 1, name: "Task 1 " + +new Date() },
          { id: 2, name: "Task 2" },
          { id: 3, name: "Task 3" },
        ],
      };
    },
  });

  return (
    <div>
      <Hydrate state={dehydrate(queryClient)}>
        <Child />
      </Hydrate>
    </div>
  );
}
