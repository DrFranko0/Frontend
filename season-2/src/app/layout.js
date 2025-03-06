import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata = {
  title: "Rohit",
  description: "Frontend & Agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}