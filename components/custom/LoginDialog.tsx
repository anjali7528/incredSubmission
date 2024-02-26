import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/reusable/dialog";
import { CompassIcon } from "lucide-react";
import FloatInput from "../reusable/FloatInput";
import { Button } from "../reusable/button";
import Image from "next/image";

function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger className="bg-orange-700 rounded-md py-3 text-xs px-5 font-medium  hover:bg-orange-600 hover:text-white text-white">
        Login/Register
      </DialogTrigger>
      <DialogContent className="flex p-0 m-0 max-w-4xl border-0 h-full  md:max-h-96 md:h-max md:flex-row flex-col">
        <div className="flex-1 relative rounded-lg ">
          <Image
            objectFit="cover"
            layout="fill"
            alt="image"
            src="https://images.unsplash.com/photo-1548504769-900b70ed122e?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute z-[1] text-white text-4xl w-1/4 mx-9 my-12 font-medium">
            Simple, Free Investing.
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center p-12">
          <DialogTitle className="text-2xl font-normal text-center mb-8">
            {" "}
            Welcome to LOGOS
          </DialogTitle>
          <div className="flex border justify-center rounded-md px-12 py-3 gap-2 text-sm font-small hover:shadow-lg hover:shadow-gray-300">
            <CompassIcon />
            <span>Continue with Safari</span>
          </div>
          <div className="relative flex justify-center items-center my-3">
            <hr className="h-px w-full my-8 bg-gray-200 border dark:bg-gray-300" />
            <span className="absolute w-1/2 h-1/2 bg-white text-center">
              Or
            </span>
          </div>
          <FloatInput label={"Your Email Address"} />
          <Button className="bg-orange-700 text-xs px-5 font-medium mt-12 hover:bg-orange-600 hover:text-white text-white">
            Continue
          </Button>
          <span className=" text-xs font-light mt-2 text-center">
            By proceeding, I agree to T&C, Privacy Policy & Tariff Rent.
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
