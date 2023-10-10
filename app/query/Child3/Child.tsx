"use client";

import { FC, Suspense } from "react";
import { ChildClient } from "./ChildClient";

export const Child: FC<{}> = () => {
  return (
    <Suspense fallback={<span>LOADING ...</span>}>
      <ChildClient />
    </Suspense>
  );
};
