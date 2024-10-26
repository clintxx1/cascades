import InfoCard from "@/components/infoCard";
import PromoSection from "@/components/promoSection";
import Image from "next/image";
import React from "react";
import { lato } from "@/lib/fonts";
import { Metadata } from "next";
import { BranchCard } from "./_components/branchCard";

export const metadata: Metadata = {
  title: "Branches | Cascades.ph",
};
export default function Branches() {
  return (
    <section className="w-full text-darkLiver lg:text-3xl md:text-2xl text-xl">
      <BranchCard
        image={"https://ik.imagekit.io/cascades/cascades/branches/p1.png"}
        name="Cascades Sibol"
        branch="Mandaluyong Branch"
        address="6 Silangan, Barangka Drive Mandaluyong City"
      />
      <BranchCard
        image={"https://ik.imagekit.io/cascades/cascades/branches/p2.png"}
        name="Cascades Hiraya"
        branch="Mandaluyong Branch"
        address="276 Sto. Rosario Plainview, Mandaluyong City"
      />
      <BranchCard
        image={"https://ik.imagekit.io/cascades/cascades/branches/p3.png"}
        name="Cascades Sibol"
        branch="Quezon City Branch"
        address="74 Tomas Morato Avenue, Sacred Heart Quezon City"
      />
      <BranchCard
        image={"https://ik.imagekit.io/cascades/cascades/branches/p4.png"}
        name="Cascades Sibol"
        branch="Cavite Branch"
        address="Likha Village, Lot 2 Biluso Poblacion, Silang Cavite"
      />
    </section>
  );
}
