import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Input } from "@/components/ui/input";
import Forms from "../component/Forms";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default function GuestBookPage() {
  return (
    <>
      <section className=" max-w-7xl w-full px-4 md:px-8 mx-auto">
        <h1 className="text-4xl font-semibold   lg:text-5xl  pt-5  ">
          {" "}
          GuestBook{" "}
        </h1>
        <p className=" leading-7 text-muted-foreground mt-2  ">
          {" "}
          Sign my GuestBook
        </p>
        <Card className="mt-10">
          <CardHeader className=" flex flex-col  w-full">
            <label className="mb-2">Message</label>

            <GuestBookForm />
          </CardHeader>
        </Card>
      </section>
    </>
  );
}

async function GuestBookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return <Forms />;
  }
 
  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your Message..." />
      <RegisterLink>
        <Button className="w-full">Sign for free</Button>
      </RegisterLink>
    </div>
  );
}
