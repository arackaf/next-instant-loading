import { Child } from "./Child1/Child";
import { Child as Child2 } from "./Child2/Child";
import { Child as Child3 } from "./Child3/Child";

export default async function Page() {
  return (
    <div>
      <Child />
      <br />
      <Child2 />
      <br />
      <Child3 />
      <br />
    </div>
  );
}
