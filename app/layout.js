import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: "EyeGo Dashboard",
  description: "task for eyeGo internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
