import Navbar from "@/components/Navbar";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import ReduxProvider from "@/utils/ReduxProvider";

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
          <ReduxProvider>
            <SessionProvider session={session}>
              <div className="">
                {" "}
                <Navbar />
                <main className="app">{children}</main>
              </div>
            </SessionProvider>
          </ReduxProvider>
        }
      </body>
    </html>
  );
}
