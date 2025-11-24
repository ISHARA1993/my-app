import Image from "next/image";
import SideNav2 from "@/app/ui/components/sidenav_2";
export default function Home() {
  return (
    <main >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Welcome to Next.js!</h1>
        <div>
          <p>
            Get started by editing
          </p>
        </div>

      </div>
      <div>
        <SideNav2 />
        <br />
      </div>
    </main>
  );
}