import {
  AboutUs,
  BookAServiceModal,
  GetInTouch,
  GetStarted,
  HeroSection,
  Services,
  Statistics,
  Testimonials,
  VipTreatment,
  Faqs,
} from "@/components";

const Home = () => {
  return (
    <div className="space-y-8 md:space-y-16">
      <HeroSection />
      <main className="px-4 lg:px-2 xl:px-32 space-y-8 lg:space-y-16">
        <Statistics />
        <Services />
        <VipTreatment />
      </main>
      <div className="space-y-8 lg:space-y-16">
        <Testimonials />
        <Faqs />
        <GetInTouch />
        <GetStarted />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
