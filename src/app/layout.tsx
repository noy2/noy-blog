import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "noy's Blog",
  description: "개발하다 생긴일",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="mb-10 md:mb-16"></div>
          <main className="w-screen flex-1">{children}</main>
          <div className="mb-10 md:mb-16"></div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
