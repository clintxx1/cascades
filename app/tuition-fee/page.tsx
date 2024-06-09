import React from "react";
import MonthlyCalendarTable from "./_components/preschool/monthCalendarTable";
import OneTimePaymentTable from "./_components/preschool/oneTimePaymentTable";

export default function Tuition() {
  return (
    <section className="w-full">
      <div className="space-y-14">
        <p className="font-semibold lg:text-[42px] text-4xl text-crystalBlue">
          Cascades Preschool Fee for Academic Year 2024-2025
        </p>
        <MonthlyCalendarTable />
        <OneTimePaymentTable />
      </div>
    </section>
  );
}