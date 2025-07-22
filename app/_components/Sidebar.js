import Link from "next/link";

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/stats">stats</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
