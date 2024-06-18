import React from "react";
import MonthlyCalendarTable from "./_components/preschool/monthCalendarTable";
import OneTimePaymentTable from "./_components/preschool/oneTimePaymentTable";
import ClassSchedTable from "./_components/preschool/classScheduleTable";
import PaymentTermsTable from "./_components/preschool/paytermTermsTable";
import OptionalAddOnsTable from "./_components/preschool/optionalAddOns";
import MonthlyTrialFeeTable from "./_components/preschool/monthlyTrialFees";
import Image from "next/image";
import ElemTuitionFeeTable from "./_components/elementary/tuitionFeeTable";
import DetailedPaymentTermsTable from "./_components/elementary/paymentOptionsTable";
import ScheduleTable from "./_components/bahaghari/scheduleTable";

export default function Tuition() {
  return (
    <section className="w-full">
      <div className="space-y-14">
        <p className="font-semibold lg:text-[42px] text-3xl text-crystalBlue">
          Cascades Preschool Fee for Academic Year 2024-2025
        </p>
        <MonthlyCalendarTable />
        <OneTimePaymentTable />
        <ClassSchedTable />
        <PaymentTermsTable />
        <OptionalAddOnsTable />
        <MonthlyTrialFeeTable />
      </div>
      <div className="py-5">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png"
          }
          alt="longDiv"
          width={1024}
          height={8}
          className="w-full h-[6px] my-12 lg:object-cover md:object-cover object-contain"
        />
      </div>
      <div className="space-y-14">
        <div className="font-semibold lg:text-[42px] text-3xl text-crystalBlue text-center">
          <p>School Fees for Grade 1 - Grade 3</p>
          <p className="text-lg text-crystalBlue">School Year 2024 - 2025</p>
        </div>
        <ElemTuitionFeeTable />
        <DetailedPaymentTermsTable />
      </div>
      <div className="py-5">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png"
          }
          alt="longDiv"
          width={1024}
          height={8}
          className="w-full h-[6px] my-12 lg:object-cover md:object-cover object-contain"
        />
      </div>
      <div className="space-y-14">
        <div className="font-semibold lg:text-[42px] text-3xl text-crystalBlue text-center">
          <p>School Fees for Bahaghari Program</p>
          <p className="text-lg text-crystalBlue">School Year 2024 - 2025</p>
        </div>
        <ScheduleTable />
      </div>
    </section>
  );
}
