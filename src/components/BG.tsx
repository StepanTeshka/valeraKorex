"use client";

import { PropsWithChildren} from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
const Bg = ({ children }: PropsWithChildren) => {

  return (
    <div className="flex flex-col pt-3 px-48 w-full h-full bg-[#00426f]">
      <Header />
      <div className="w-full">{children}</div>
      <Footer/>
      
    </div>
  );
};

export default Bg;
