"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { postData } from "../actions";

export default function Forms() {
  return (
    <>
      <form
        action={postData}
        className="flex flex-col justify-between  md:flex-row  gap-4"
      >
        <Input
          type="text"
          minLength={2}
          maxLength={100}
          name="message"
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
    </>
  );
}
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit">Sign for free</Button>
      )}
    </>
  );
}
