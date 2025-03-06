import "./globals.css";

export const metadata = {
  title: "DrFrank",
  description: "Sample",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        {children}
      </body>
    </html>
  );
}
