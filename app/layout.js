import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata = {
  title: "EyeGo Dashboard",
  description: "task for eyeGo internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
