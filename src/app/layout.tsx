import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI Prompts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="">{/* <div className="gradient" /> */}</div>

        <Navbar />
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
