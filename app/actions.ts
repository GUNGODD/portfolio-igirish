"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Prisma } from "@prisma/client";

export async function postData(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Unauthorised");
  }
  const data = await prisma.guestBookEntry.create({
    data: {
      userId: user.id,
      message: "",
    },
  });
}
