import Navbar from "@/components/Navbar";
import "./globals.css";
=
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
=          <div className="">
            {" "}
            <Navbar />
            <main className="app">{children}</main>
          </div>
=      </body>
    </html>
  );
}
