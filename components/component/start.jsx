import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Start() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#f0e6ff] px-4 md:px-6">
      <div className="bg-[#ffffff] shadow-2xl flex max-w-md w-3/4 md:w-3/4 h-1/3 md:h-1/3 flex-col items-center justify-center space-y-10 rounded-[20px] p-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          시작하기
        </h1>
        <Link href={"/namepage/"}>
          <Button
            size="lg"
            className="w-full bg-[#4b4b4b] font-bold text-[#ffffff] rounded-[5px] hover:bg-[#7a7a7a]"
          >
            시작
          </Button>
        </Link>
      </div>
    </main>
  );
}
