import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function GuestbookPage() {
  return (
    <>
      <section
        className="max-w-7xl w-full px-4 md:px08
mx-auto"
      >
        <h1 className=" text-4xl  font-semibold  lg:text-5xl pt-5">
          GuestBook{" "}
        </h1>
        <p className="leading-7 text-muted-foreground mt-2">
          Sign my GuestBook
        </p>
        <Card className="mt-10">
          <CardHeader className="flex flex-col w-full">
            <Label className="mb-1"> Message</Label>
            {/*  components*/}
          </CardHeader>
          <div
            className="flex flex-row gap-4 m-4 p-4
            md-5 pr-2"
          >
            <Input type="text" placeholder="Type your message..." />
            <Button>Sign in </Button>
          </div>
        </Card>
      </section>
    </>
  );
}

async function GuestBookFrom() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return <Form />;
  }
  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your Message... " />
      <RegisterLink>
        <Button className="w-full">Sign for free</Button>
      </RegisterLink>
    </div>
  );
}
