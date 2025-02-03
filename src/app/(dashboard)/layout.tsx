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
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[16%]  p-4 overflow-x-scroll">
          <Link href={"/"} className="flex gap-2 justify-center items-center lg:justify-start" >
          <Image src="/logo.png" alt="logo" width={32} height={32}/>
          <span className="hidden lg:block">ATI Kurunegala</span>
          </Link>
          <Menu/>
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-[#f7F8FA] ">
          <NavBar/>
          {children}
        </div>
      </div>
    </div>
  );
}
