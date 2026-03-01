import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wenqian Zhang",
  description: "Personal website of Wenqian Zhang",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider
          enableSystem={true}
          attribute="class"
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}


//cd ~/my-web/frontend
//git pull
//npm run build
//pm2 restart all