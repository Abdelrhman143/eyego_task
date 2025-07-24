"use client";

import { LogOut, Menu } from "lucide-react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Header({ toggleSidebar }) {
  const router = useRouter();
  async function handleLogout() {
    await signOut({ callbackUrl: "/login" });
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
            <LogOut />
          </button>
        </div>
      </div>
    </header>
  );
}
