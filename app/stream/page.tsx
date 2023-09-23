import { Suspense } from "react";
import { Child } from "./Child";

function LoadingLocal() {
  return <div className="w-48 h-48 bg-pink-400 text-black">Suspense fallback</div>;
}

export default async function Home() {
  await new Promise((res) => setTimeout(res, 200));
  return (
    <main>
      Stream below
      <Suspense fallback={<LoadingLocal />}>
        <Child />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-dynamic";
