import Navbar from "@/components/Navbar";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI Prompts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        {
          <SessionProvider session={session}>
            <div className="">
              {" "}
              <Navbar />
              <main className="app">{children}</main>
            </div>
          </SessionProvider>
        }
      </body>
    </html>
  );
}
