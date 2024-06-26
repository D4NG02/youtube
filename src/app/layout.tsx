import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { StateProvider } from "../Utility/StateProvider";
import reducer, { initialState } from "../Utility/reducer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone Youtube",
  description: "using create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider initialState={initialState} reducer={reducer}>
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
