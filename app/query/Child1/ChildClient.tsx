"use client";

import { FC } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const ChildClient: FC<{}> = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["query", "a"],
    queryFn: async () => {
      console.log("in query function 1");
      await new Promise((res) => setTimeout(res, 1000));

      return {
        tasks: [
          { id: 1, name: "Task 1" },
          { id: 2, name: "Task 2" },
          { id: 3, name: "Task 3" },
        ],
      };
    },
  });

  return data ? (
    <div>
      {data.tasks.map((t) => (
        <div key={t.id}>
          <h1>{t.name}</h1>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
