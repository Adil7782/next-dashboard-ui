import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-screen flex">
        <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[20%]  p-4 overflow-x-scroll">
          <Link href={"/"} className="flex gap-2 justify-center items-center lg:justify-start" >
          <Image src="/logo.png" alt="logo" width={32} height={32}/>
          <span className="hidden lg:block font-bold">ATI Kurunegala</span>
          </Link>
          <Menu/>
        </div>
        <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-[#f7F8FA] overflow-x-scroll">
          <NavBar/>
          {children}
        </div>
      </div>
    </div>
  );
}
