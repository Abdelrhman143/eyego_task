import Image from "next/image";
import Menu from "./Actions";
import logo from "@/public/logo.jpeg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} alt="logo" className="w-10 h-10 rounded" />
      <h1 className="font-bold">EyeGo Ai</h1>
    </div>
  );
}
