import { ReactElement } from "react";
import { dir } from "i18next";
import { languages } from "@/i18n/setting";

type RootLayoutProps = { children: ReactElement; params: { lng: string } };
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
