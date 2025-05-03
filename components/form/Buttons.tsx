"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RotateCw } from "lucide-react";

type btnSize = "default" | "lg" | "sm" | "icon";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text: string;
};

export const SubmitButton = (props: SubmitButtonProps) => {
  const { className, size, text } = props;

  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      size={size || "default"}
      className={`${className} capitalize`}
    >
      {
      pending 
      ? <><RotateCw className="animate-spin" /> <span>Please wait</span></>
      : <p>{text}</p>
      }
    </Button>
  );
};
