import Link from "next/link";
import Container from "../ui/Container";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Separator } from "../ui/separator";

const socialLinks = [
  {
    icon: <Facebook size={18} />,
    label: "Facebook",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
  },
  {
    icon: <Twitter size={18} />,
    label: "Twitter",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="py-8 bg-foreground text-background">
        <Container className="space-y-4">
          <div className="flex justify-between gap-3">
            <div>
              <Link href={"/"} className="font-bold text-lg md:text-xl">
                Creative Hub <br />
                IT Agency
              </Link>
            </div>
            <div className="space-y-3.5">
              <h5 className="font-bold text-lg md:text-xl">Follow Us</h5>
              <div className="flex items-center flex-col gap-2">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item}
                    className={`flex items-center gap-1.5 text-gray-300 hover:text-gray-100 transition-colors duration-300`}
                    aria-label={`${item.label} icon`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Separator className={"bg-gray-500"} />
          <div className="flex items-center flex-col sm:flex-row justify-between gap-2.5 sm:gap-5 text-gray-300 md:px-8">
            <div className="text-sm space-x-1.5">
              <span className="font-semibold text-gray-200">
                Creative Hub IT Agency
              </span>
              <span>2023, All Rights Reserved</span>
            </div>
            <div className="flex items-center gap-2">
              {[
                { label: "Terms & Conditions", href: "/" },
                { label: "Privacy", href: "/" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
