import {
  BodyWorks,
  CarWashServices,
  InteriorDetailing,
  MechanicalServices,
  ServicesBanner,
  ServicesButtons,
  SystemXServices,
} from "../../../components";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-10">
      <ServicesBanner />
      <main className="px-5 lg:px-2 xl:px-32 space-y-12 lg:space-y-24">
        <ServicesButtons />
        <CarWashServices />
      </main>
      <BodyWorks />
      <div className="px-5 lg:px-2 xl:px-32 space-y-12 lg:space-y-24">
        <InteriorDetailing />
        <SystemXServices />
        <MechanicalServices />
      </div>
    </div>
  );
};

export default Page;
