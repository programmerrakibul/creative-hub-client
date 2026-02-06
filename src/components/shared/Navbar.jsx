"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import NavLink from "../ui/NavLink";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Client Projects", href: "/client-projects" },
  { name: "Our Team", href: "/our-team" },
  { name: "Contact Us", href: "/contact-us" },
];

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-start space-x-2 w-16">
        <Image
          src={"/header-logo.png"}
          alt={"Creative Hub IT Agency"}
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 rounded-full">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} className="nav_links">
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="ml-4 hidden md:flex items-end space-x-2">
          <Button size="lg">Get A Quote →</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-75 sm:w-87.5">
          <div className="flex flex-col h-full p-6 mt-7">
            <div className="flex-1 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="nav_links"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-8 border-t border-border">
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 rounded-md text-base transition-all duration-200 hover:shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get A Quote →
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
