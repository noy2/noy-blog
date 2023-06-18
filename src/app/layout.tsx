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
          <div className="mx-auto container flex flex-col max-w-screen-sm bg-gray-200 px-8 py-6 rounded-lg mb-8">
            <p className="text-xl md:text-2xl text-gray-900 font-bold">
              noy&apos;s Blog
            </p>
            <div className="mb-2" />
            <p className="text-sm md:text-base text-gray-500">
              개발하다가 생긴일들을 정리하고 글을 써보는 공간입니다.
            </p>
          </div>
          <div className="mb-4 md:mb-8"></div>
          <main className="w-screen flex-1">{children}</main>
          <div className="mb-4 md:mb-8"></div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
