import { FC, Suspense } from "react";
import { getSsrQueryClient } from "../utils";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { ChildClient } from "./ChildClient";

export const Child: FC<{}> = () => {
  return (
    <Suspense fallback={<span>LOADING ...</span>}>
      <ChildClient />
    </Suspense>
  );
};
