"use client";

import { LogOut, Menu } from "lucide-react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState } from "react";
import SpinnerMin from "./SpinnerMin";

export default function Header({ toggleSidebar }) {
  const [isLogout, setIsLogout] = useState("false");
  const router = useRouter();
  async function handleLogout() {
    setIsLogout(true);
    await signOut({ callbackUrl: "/login" });
    setIsLogout(false);
  }

  return (
    <header className="py-2 shadow-sm shadow-gray-300 mb-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={toggleSidebar} className="md:hidden">
            <Menu />
          </button>
          <Logo />
        </div>
        <div>
          <button className="hover:cursor-pointer" onClick={handleLogout}>
            {isLogout ? <LogOut /> : <SpinnerMin />}
          </button>
        </div>
      </div>
    </header>
  );
}
