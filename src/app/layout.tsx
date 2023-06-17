import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import metadata from "@/data/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
  };
  return (
    <html lang="en">
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:site_name" content={meta.author} />
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
