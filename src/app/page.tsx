import Blog from "@/pages/Blog";

export default function Home() {
  return (
    <main>
      <div className="mx-auto px-6 container flex justify-center">
        <div className="w-full max-w-screen-sm flex flex-col space-y-10 md:space-y-16">
          <Blog />
        </div>
      </div>
    </main>
  );
}
