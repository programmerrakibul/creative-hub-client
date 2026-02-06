import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Check } from "lucide-react";

const ServiceCard = ({ service = {} }) => {
  const { title, description, features = [], bgColor, icon } = service;
  return (
    <>
      <Card className={`${bgColor} justify-center text-center gap-4 border-0`}>
        <CardHeader className={"justify-center"}>
          {icon && (
            <Image
              src={icon}
              alt={title}
              width={80}
              height={80}
              className="max-w-34.25 inline-block mx-auto"
            />
          )}
          <CardTitle className={"text-2xl md:text-3xl"}>{title}</CardTitle>
        </CardHeader>
        <Separator
          className={"bg-primary/60 max-w-20.5 min-h-0.75 mx-auto -mt-2.5"}
        />
        <CardContent className={"space-y-1"}>
          <CardDescription className={"font-medium text-black"}>
            <p>{description}</p>
          </CardDescription>
          <ul>
            {features.map((f, i) => (
              <li key={i} className={"font-medium text-black flex items-center gap-0.5 justify-center"}>
                <Check size={16} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className={"justify-center flex-1 items-end"}>
          <Button className={"rounded-full"}>Read More</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ServiceCard;
