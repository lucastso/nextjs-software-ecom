import { fontOutfit } from "@/misc/fonts";
import "./globals.css";

export const metadata = {
  generator: "Next.js",
  keywords: [
    "Software",
    "Programas",
    "Aplicações",
    "Plataformas",
    "E-commerce",
  ],
  creator: "Lucas",
  title: "Paracord Z - Software",
  description: "Paracord Z - Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
