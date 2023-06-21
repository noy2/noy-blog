import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../app/globals.css";
import metadata from "@/data/metadata";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  author?: string;
  date?: string;
}

const Layout = ({
  children,
  Meta,
}: {
  children: React.ReactNode;
  Meta: Props;
}) => {
  const meta = {
    ...Meta,
  };
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Head>
          <title>{meta.title}</title>
          <meta content={meta.description} name="description" />
          <meta property="og:site_name" content={meta.author} />
        </Head>
        <Header />
        <div className="mb-4 md:mb-8"></div>
        <main className="flex-1">{children}</main>
        <div className="mb-4 md:mb-8"></div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
