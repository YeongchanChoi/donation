import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Name() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f0e6ff]">
      <div className="bg-[#ffffff] rounded-[20px] shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>
        <div className="mb-6">
          <Label htmlFor="name" className="block mb-2 font-medium">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        <Link href="./charcustom/" passHref>
          <Button className="w-full bg-[#000000] text-[#ffffff] hover:bg-[#575757]">
            Submit
          </Button>
        </Link>
      </div>
    </div>
  );
}
