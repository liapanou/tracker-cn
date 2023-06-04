import {
  Anchor,
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Playlist } from "@/data/playlists";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

const shipList: { name: string; location: string; fuel: number }[] = [
  { name: "Poseidon", location: "4654656", fuel: 20 },
  { name: "Aphrodite", location: "6565645", fuel: 50 },
  { name: "Santa Maria", location: "656526652", fuel: 100 },
  { name: "Atlantis", location: "56565665", fuel: 120 },
  { name: "Shark Bait", location: "986859", fuel: 200 },
  { name: "The Orca", location: "4656564", fuel: 110 },
  { name: "Nemo", location: "63635263", fuel: 90 },
];

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Tracking Ships
          </h2>
          <div className="space-y-1 overflow-y-auto">
            {shipList.map((ship, idx) => {
              return (
                <div key={idx} className="py-2">
                  <div className="w-full h-7 px-2 justify-start flex gap-1 bg-slate-400 rounded-full">
                    <Anchor className="mr-1 mt-1 h-4 w-4" />
                    {ship.name}
                  </div>
                  <div className="px-2">
                    <h2>
                      Location:
                      <Link href="" className="hover:underline ml-1">
                        {ship.location}
                      </Link>
                    </h2>
                    <h2>Fuel: {ship.fuel} L</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
