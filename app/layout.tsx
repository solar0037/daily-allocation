import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "일일할당량",
    description: "일일할당량: 이거 끝내기 전에는 잠에 들 생각도 마라!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
