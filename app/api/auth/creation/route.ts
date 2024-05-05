import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong...");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstname: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileimage: user.picture,
      },
    });
  }

<<<<<<< HEAD
  return NextResponse.redirect(
    "https://portfolio-nextjs14-ruby.vercel.app/guestbook",
  );
=======
  return NextResponse.redirect("https://localhost:3000/guestbook");
>>>>>>> e49a45f8be4d6c75a1f02876bc15ed6e41d4d20a
}
