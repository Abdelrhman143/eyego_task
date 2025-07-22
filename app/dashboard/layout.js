import Sidebar from "../_components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
