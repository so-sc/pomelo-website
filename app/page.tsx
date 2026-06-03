import Header from "@/components/Header";
import DocsSidebar from "@/components/DocsSidebar";
import DocsContent from "@/components/DocsContent";
import DocsTOC from "@/components/DocsTOC";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-[90rem] flex-1 items-start gap-4 px-4">
        <DocsSidebar />
        <DocsContent />
        <DocsTOC />
      </div>
      <Footer />
    </div>
  );
}
