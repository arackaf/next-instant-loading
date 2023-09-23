export default async function Home() {
  await new Promise((res) => setTimeout(res, 2000));
  return <main>Full </main>;
}

export const dynamic = "force-dynamic";
