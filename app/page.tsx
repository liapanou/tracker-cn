import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/data/playlists";

import { MyMap } from "@/components/map";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { Locate, TvIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js" />
      <div className="h-screen w-screen overflow-hidden grid grid-rows-[50px_1fr]">
        <div>
          <Menubar>
            <MenubarMenu>
              <div className="flex gap-2 px-2 py-2 font-bold text-lg">
                <Locate className=" mt-1 h-4 w-4" />
                Tracker
              </div>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="grid grid-cols-[400px_1fr]">
          <Sidebar playlists={playlists} className="hidden lg:block" />
          <MyMap />
        </div>
      </div>
    </div>
  );
}
