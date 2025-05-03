"use client"
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner"


const SignOutLinks = () => {

  return (
    <SignOutButton redirectUrl="/">
      <button
      onClick={() => 
        toast("Logout successfully.",
            {
           description: "You have been logged out.",
           action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },     
            }
        )
      }
      >
        Log out
        </button>
    </SignOutButton>
  );
};
export default SignOutLinks;
