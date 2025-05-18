import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full w-full font-montserrat">
      <Header />
      <div className="w-full h-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
