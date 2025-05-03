import { AlignLeft, LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLinks from "./SignOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownListMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative overflow-hidden border border-transparent hover:border-primary/20 bg-background/60 backdrop-blur-md transition-all hover:shadow-[0_0_0.5rem_0_rgba(var(--color-primary),_0.2)] group"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex items-center justify-center">
              <AlignLeft className="h-5 w-5 group-hover:scale-110 transition-transform text-foreground/80 group-hover:text-primary" />
            </div>
            <div className="absolute -bottom-full group-hover:bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 transition-all duration-300" />
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          className="w-72 p-2 bg-background/90 backdrop-blur-lg border border-border/50 rounded-xl shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)] animate-in slide-in-from-top-4 zoom-in-95 duration-200"
          align="end"
          sideOffset={8}
        >
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="relative">
              <UserIcon className="h-10 w-10 rounded-full ring-2 ring-primary/20" />
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-background"></span>
            </div>
            <div>
              <DropdownMenuLabel className="font-semibold text-lg text-foreground p-0">
                My Account
              </DropdownMenuLabel>
              <p className="text-xs text-muted-foreground">Manage your account settings</p>
            </div>
          </div>
          
          <DropdownMenuSeparator className="bg-border/50 my-1.5" />

          <SignedIn>
            <div className="space-y-0.5 py-1">
              {links.map((link: any) => {
                return (
                <DropdownMenuItem 
                  key={link.label}
                  className="group flex rounded-lg px-3 py-2.5 hover:bg-primary/10 cursor-pointer transition-all duration-200 focus:bg-primary/15 focus:outline-none"
                >
                  <Link 
                    href={link.href}
                    className="flex items-center gap-3 w-full"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </DropdownMenuItem>
              );
              })}
            </div>

            <DropdownMenuSeparator className="bg-border/50 my-1.5" />
            <DropdownMenuItem className="group flex rounded-lg px-3 py-2.5 hover:bg-destructive/10 cursor-pointer transition-all duration-200 focus:bg-destructive/15 focus:outline-none">
              <div className="flex items-center gap-3 w-full">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition-colors">
                  <LogOut className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-destructive">
                  <SignOutLinks />
                </span>
              </div>
            </DropdownMenuItem>
          </SignedIn>

          <SignedOut>
            <div className="space-y-2 p-2">
              <SignInButton mode="modal">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                  <User className="h-4 w-4" />
                  Login
                </button>
              </SignInButton>
              
              <SignUpButton mode="modal">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors mt-2">
                  Register
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownListMenu;