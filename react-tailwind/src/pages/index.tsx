import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Topbar } from "@/components/Topbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
   <Topbar></Topbar>
  <VideoGrid></VideoGrid>
    </div>
  );
}
