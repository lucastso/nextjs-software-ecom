import { fontOutfit } from "@/misc/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <body>
        <main className="overflow-x-hidden flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
