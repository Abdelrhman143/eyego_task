import { ChartArea, Home, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ toggleSidebar }) {
  return (
    <aside className=" min-h-dvh md:block md:w-52 p-4 border-r border-gray-300">
      <button onClick={toggleSidebar} className="absolute right-2 md:hidden">
        <X />
      </button>
      <nav>
        <ul>
          <li className="mb-5">
            <Link className="flex items-center gap-3" href="/dashboard">
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3  rounded-sm"
              href="/dashboard/stats"
            >
              <ChartArea />
              <span>Stats</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
