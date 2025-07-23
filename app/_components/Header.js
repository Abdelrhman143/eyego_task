import { LogOut, Menu } from "lucide-react";
import Logo from "./Logo";

export default function Header({ toggleSidebar }) {
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
          <button>
            <LogOut />
          </button>
        </div>
      </div>
    </header>
    // <header className="py-2 shadow-sm shadow-gray-300 mb-4">
    //   <div className="container flex items-center justify-between">
    //     <div className="flex items-center gap-2">
    //       <button onClick={toggleSidebar} className="md:hidden">
    //         <Menu />
    //       </button>
    //       <Image src={logo} alt="logo" className="w-10 h-10 rounded" />
    //       <h1 className="font-bold">EyeGo Ai</h1>
    //     </div>
    //     <div>
    //       <button>
    //         <LogOut />
    //       </button>
    //     </div>
    //   </div>
    // </header>
  );
}
