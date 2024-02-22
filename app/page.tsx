import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="mx-2 bg-red-600 text-white px-4">hello world</h1>
      <Button variant = "outline">click</Button>
    </main>
  );
}
