"use server";

import { revalidateTag } from "next/cache";

export const dummyAction = async () => {
  await revalidateTag("abc");
};
