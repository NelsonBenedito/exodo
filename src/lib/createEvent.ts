import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";


export const createEvent = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

};
