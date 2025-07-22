import logo from "@/public/logo.jpeg";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-2 shadow-sm shadow-gray-300 mb-4 flex items-center">
      <div className="container flex items-center gap-2">
        <Image src={logo} alt="logo" className="w-10 h-10 rounded" />
        <h1 className="font-bold">EyeGo Ai</h1>
      </div>
      <div className="mr-3">
        <button>
          <LogOut />
        </button>
      </div>
    </header>
  );
}
