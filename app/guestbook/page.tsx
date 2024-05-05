import { Card, CardHeader } from "@/components/ui/card";

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
          <CardHeader className=" flex flex-col  w-full"></CardHeader>
        </Card>
      </section>
    </>
  );
}

function GuestBookForm() {
  const user = false;

  if (user) {
    return (
      <div>
        <h1> hello user</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row ">
      <Input />
    </div>
  );
}
