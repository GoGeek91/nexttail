"use client";

import Image from "next/image";
import { SettingModal } from "./modaldemo/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SettingModal />
    </main>
  );
}
