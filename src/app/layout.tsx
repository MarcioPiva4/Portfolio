import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { GlobalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";

const fontFamily = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfólio | Home",
  description: "Portfólio - Márcio Piva Junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={fontFamily.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle></GlobalStyle>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
