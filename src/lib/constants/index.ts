import { Facebook, Mail, Phone } from "lucide-react";
import { siteConfig } from "../site-config";
import {
  T_NavLink,
  T_BasicSomething,
  T_Social,
  T_Statistic,
  T_Faq,
  T_WorkingHour,
  T_ServiceButton,
  T_SystemXInteriorCoatingService,
  T_HomeService,
  T_Manager,
  T_Technician,
} from "../types";
import { FaWhatsapp } from "react-icons/fa6";

const navLinks: T_NavLink[] = [
  {
    name: "SERVICES",
    nameKey: "services",
    link: siteConfig.siteLinks.servicesPage.main,
  },
  {
    name: "ABOUT US",
    nameKey: "aboutUs",
    link: siteConfig.siteLinks.aboutUsPage,
  },
  {
    name: "CONTACT US",
    link: siteConfig.siteLinks.contactUs,
    nameKey: "contactUs",
  },
  {
    name: "FAQs",
    link: siteConfig.siteLinks.faqsPage,
    nameKey: "faqs",
  },
];

const socials: T_Social[] = [
  {
    text: "Call us",
    icon: Phone,
    socialInfo: "+254 768 395187",
    variant: "button",
  },
  {
    text: "Email us",
    icon: Mail,
    socialInfo: "mailto:info@kellianautogarage.com",
    variant: "link",
  },
  {
    text: "WhatsApp",
    icon: FaWhatsapp,
    socialInfo: [
      { label: "+254 768 395187", value: "https://wa.me/+254 768 395187" },
      { label: " 0795582886", value: "https://wa.me/ 0795582886" },
      { label: "0734822594", value: "https://wa.me/447700327648" },
    ],
    variant: "dropdown",
  },
  {
    text: "Kellian Enterprises",
    icon: Facebook,
    socialInfo: "https://www.facebook.com/profile.php?id=100094674517656",
    variant: "link",
  },
];

const statistics: T_Statistic[] = [
  {
    name: "YEARS OF EXPERIENCE",
    value: 5,
  },
  {
    name: "TECHNICIANS",
    value: 20,
  },
  {
    name: "CUSTOMERS",
    value: 200,
  },
  {
    name: "PROJECTS",
    value: 350,
  },
];
const services: T_HomeService[] = [
  {
    imageUrl: "/services/kellian-services/diagnostics.png",
    title: "Diagnostic Services",
    description:
      "Comprehensive diagnostics using state-of-the-art tools to identify and resolve hidden issues efficiently.",
    serviceLink: siteConfig.siteLinks.servicesPage.systemXServices,
  },
  {
    imageUrl: "/services/kellian-services/car-wash.jpg",
    title: "Washing Services",
    description:
      "Thorough interior and exterior cleaning to keep your car spotless and looking its best.",
    serviceLink: siteConfig.siteLinks.servicesPage.carWash,
  },
  {
    imageUrl: "/services/kellian-services/engine-servicing.png",
    title: "Engine Servicing",
    description:
      "Regular engine maintenance and advanced repair services to optimize performance and longevity.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/services/kellian-services/tyre-replacement.png",
    title: "Tire Services",
    description:
      "Expert tire fitting, balancing, and repair to ensure a smooth and safe drive.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/services/kellian-services/body-work.png",
    title: "Body Work",
    description:
      "High-quality body repair and painting services to restore your car’s appearance and value.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/services/kellian-services/interior-repairs.png",
    title: "Interior Repairs",
    description:
      "Detailed interior repair services to bring comfort and style back to your vehicle.",
    serviceLink: siteConfig.siteLinks.servicesPage.interiorDetailing,
  },
  {
    imageUrl: "/services/kellian-services/wheel-alignment.png",
    title: "Wheel Alignment",
    description:
      "Precise alignment services to improve handling, tire longevity, and driving safety.",
    serviceLink: siteConfig.siteLinks.servicesPage.bodyWork,
  },
  {
    imageUrl: "/services/kellian-services/oil.jpg",
    title: "Oil Changing",
    description:
      "Efficient oil changes with top-quality oils to keep your engine running smoothly.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/home/services/brake-services.png",
    title: "Brake Services",
    description:
      "Inspection and repair of brake systems to ensure your safety and peace of mind on the road.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/home/services/greasing.png",
    title: "Greasing",
    description:
      "Essential greasing services to reduce friction and extend the life of your vehicle's components.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/home/services/suspension-repair.png",
    title: "Suspension Repair",
    description:
      "Specialized suspension repair to improve stability and comfort, making your ride smoother.",
    serviceLink: siteConfig.siteLinks.servicesPage.bodyWork,
  },
  {
    imageUrl: "/home/services/air-conditioning.png",
    title: "Air Conditioning Services",
    description:
      "Full air conditioning maintenance and repair to keep your vehicle cool and comfortable.",
    serviceLink: siteConfig.siteLinks.servicesPage.interiorDetailing,
  },
  {
    imageUrl: "/home/services/electrical-repairs.png",
    title: "Electrical System Repairs",
    description:
      "Comprehensive electrical repairs to fix wiring, lights, and other electrical components.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/home/services/battery-services.png",
    title: "Battery Services",
    description:
      "Battery testing, replacement, and charging to ensure reliable starts every time.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
  {
    imageUrl: "/home/services/exhaust-repair.png",
    title: "Exhaust System Repair",
    description:
      "Repairs to improve exhaust performance and reduce emissions for a cleaner drive.",
    serviceLink: siteConfig.siteLinks.servicesPage.mechanicalServices,
  },
];

const treatments: T_BasicSomething[] = [
  {
    imageUrl: "/home/treatments/logo-placeholder.png",
    title: "Expert Care, Every Time",
    description:
      "Professionalism is our promise. Our certified technicians bring years of expertise to every service, ensuring your vehicle gets the meticulous attention it deserves.",
  },
  {
    imageUrl: "/home/treatments/logo-placeholder.png",
    title: "Quality you can trust",
    description:
      "We pride ourselves on delivering top-tier, reliable auto care. Using advanced tools and technology, we provide precise repairs and maintenance that keep your vehicle running smoothly and safely.",
  },
  {
    imageUrl: "/home/treatments/logo-placeholder.png",
    title: "Premium Service, Affordable Prices",
    description:
      "Quality car care doesn’t have to break the bank. We offer competitive rates, giving you access to premium automotive services without the high price tag.",
  },
];

const testimonials: T_BasicSomething[] = [
  {
    title: "Peter W.",
    description:
      "I've been taking my cars to Kellian for years. Their expertise and attention to detail keep me coming back. Best garage in town!",
  },
  {
    imageUrl: "/home/testimonials/Elvis Wekesa.jpg",
    title: "Elvis Wekesa",
    description:
      "I had an outstanding experience at Kellian! Their team was professional, and my car has never looked better after their detailing service. Highly recommend!",
  },
  {
    imageUrl: "/home/testimonials/Mary A.jpg",
    title: "Mary A.",
    description:
      "Kellian provided top-notch service during my recent oil change. The staff was knowledgeable and friendly. I will definitely be returning!",
  },
  {
    title: "Linda M.",
    description:
      "Kellian's ceramic coating service transformed my car's appearance. I couldn’t be happier with the results!",
  },
  {
    imageUrl: "/home/testimonials/David L.jpg",
    title: "David L.",
    description:
      "The team at Kellian went above and beyond with the bodywork on my vehicle. It looks brand new! Thank you for the amazing service!",
  },
  {
    imageUrl: "/home/testimonials/Susan T.jpg",
    title: "Susan T.",
    description:
      "I appreciate the honesty and transparency at Kellian. They explained everything clearly and didn’t try to upsell me on unnecessary services.",
  },
];

const faqs: T_Faq[] = [
  {
    question: "What services does Kellian Autogarage offer?",
    answer:
      "We offer a comprehensive range of auto repair and maintenance services, including oil changes, brake repairs, engine diagnostics, tire rotation, and more.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can easily schedule an appointment using our online booking system on our website or by contacting us directly via phone.",
  },
  {
    question: "Do you offer emergency auto repair services?",
    answer:
      "Yes, we provide 24/7 emergency auto repair services to assist you in urgent situations.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday to Saturday from 8:00 AM to 6:00 PM. Our emergency services are available around the clock.",
  },
  {
    question: "How do I know if my car needs maintenance?",
    answer:
      "Signs that your vehicle may need maintenance include unusual noises, warning lights on the dashboard, decreased performance, or if it has been a while since your last service. It’s always best to consult with our technicians.",
  },
  {
    question: "Do you provide warranties on your services?",
    answer:
      "Yes, we offer warranties on many of our services and parts to ensure your peace of mind. Please ask our team for specific details during your visit.",
  },
  {
    question: "How can I get a quote for my auto repair?",
    answer:
      "You can request a quote by filling out the contact form on our website or by calling us directly. Our team will be happy to assist you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including cash, credit/debit cards, and mobile payment options.",
  },
  {
    question: "Do you provide services for fleet vehicles?",
    answer:
      "Yes, we offer specialized maintenance and repair services for fleet vehicles to help keep your business running smoothly.",
  },
  {
    question: "What should I do if my car breaks down?",
    answer:
      "If your vehicle breaks down, safely move it to the side of the road if possible. Contact us for emergency assistance, and our team will guide you through the next steps.",
  },
  {
    question: "How often should I get my oil changed?",
    answer:
      "Generally, it’s recommended to change your oil every 3,000 to 7,500 miles, depending on your vehicle's make and model. Always refer to your owner’s manual for specific recommendations.",
  },
  {
    question: "Can you work on hybrid or electric vehicles?",
    answer:
      "Yes, our technicians are trained to work on hybrid and electric vehicles, ensuring they receive the specialized care they need.",
  },
  {
    question: "How can I improve my vehicle’s fuel efficiency?",
    answer:
      "Regular maintenance, including oil changes, air filter replacements, and proper tire inflation, can help improve your vehicle’s fuel efficiency. Our team can provide further tips during your visit.",
  },
  {
    question: "What should I bring when I come for my appointment?",
    answer:
      "Please bring your vehicle’s registration, any previous service records, and a list of any specific concerns you may have about your vehicle.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "Yes, we frequently have special promotions and discounts. Please check our website or contact us to learn about our current offers.",
  },
];

const workingHours: T_WorkingHour[] = [
  {
    day: "Mon to Fri",
    time: "8:00 AM - 5:00 PM",
  },
  {
    day: "Saturday",
    time: "9:00 AM - 5:00 PM",
  },
  {
    day: "Sun",
    time: "Closed",
  },
];

// Yes this was inspired by 13 Reasons Why (PS: Haven't watched it, only read the novel - ish)
const fiveReasonsWhy: T_BasicSomething[] = [
  {
    title: "Experienced Technicians",
    description:
      "Our team consists of certified and highly skilled mechanical engineers and supervisors who are dedicated to ensuring your car is in top condition.",
    imageUrl: "/about-us/why-us/experienced-technicians.png",
  },
  {
    title: "Advanced Diagnostic Tools",
    description:
      "We utilize cutting-edge technology for vehicle diagnostics, enabling us to identify and solve problems quickly and accurately.",
    imageUrl: "/about-us/why-us/advanced-diagnostic-tools.png",
  },
  {
    title: "Comprehensive Services",
    description:
      "From engine servicing and oil changes to tire replacements and vacuum cleaning, we provide a full range of auto care services.",
    imageUrl: "/about-us/why-us/comprehensive-services.png",
  },
  {
    title: "Customer Centric",
    description:
      "Our top priority is our customers. We offer personalized services and solutions tailored to each vehicle's specific needs.",
    imageUrl: "/about-us/why-us/customer-centric.png",
  },
  {
    title: "Affordable Pricing",
    description:
      "Quality service doesn't have to come at a high price. We offer competitive rates to ensure that our services remain accessible to all vehicle owners.",
    imageUrl: "/about-us/why-us/affordable-pricing.png",
  },
];

const servicesButtons: T_ServiceButton[] = [
  {
    text: "Car Wash",
    sectionId: "car-wash",
  },
  {
    text: "Body Work",
    sectionId: "body-work",
  },
  {
    text: "Interior Detailing",
    sectionId: "interior-detailing",
  },
  {
    text: "Mechanical Services",
    sectionId: "mechanical-services",
  },
  {
    text: "System X Services",
    sectionId: "system-x-services",
  },
  {
    text: "Ceramic Coating",
    sectionId: "cermamic-coating",
  },
];

const carWashServices: T_BasicSomething[] = [
  {
    imageUrl: "/services/kellian-services/car-wash.jpg",
    title: "Body & Engine Wash",
    description: "Remove dirt and grime from the exterior and engine bay.",
  },
  {
    imageUrl: "/services/kellian-services/under-wash.jpg",
    title: "Underwash & Interior",
    description: "Deep clean the undercarriage and interior surfaces.",
  },
  {
    imageUrl: "/services/kellian-services/carpet-cleaning.png",
    title: "Vacuum and Carpet Cleaning",
    description:
      "Ensure a spotless interior with thorough vacuuming and carpet cleaning",
  },
];

const bodyWorks: T_BasicSomething[] = [
  {
    imageUrl: "/services/bw-1.png",
    title: "Spray Painting",
    description:
      "Restore your vehicle's appearance with high-quality spray painting.",
  },
  {
    imageUrl: "/services/bw-2.png",
    title: "Panel Beating and Body Fitting",
    description:
      "Get your vehicle back to its original shape with expert panel beating.",
  },
  {
    imageUrl: "/services/bw-3.png",
    title: "Buffing, Polishing and Full Valeting",
    description: "Enhance shine and protect your vehicle's finish.",
  },
  {
    imageUrl: "/services/bw-4.png",
    title: "Wheel Alignment and Tyre Balancing",
    description: "Improve handling and extend the life of your tyres.",
  },
  {
    imageUrl: "/services/bw-5.png",
    title: "Computerized Diagnosis and Auto Wiring",
    description: "Diagnose and repair electronic issues accurately.",
  },
  {
    imageUrl: "/services/bw-6.png",
    title: "Overhaul Services",
    description: "Comprehensive overhauls for major repairs and maintenance.",
  },
];

const interiorDetailings: T_BasicSomething[] = [
  {
    imageUrl: "/home/services/id-1.png",
    title: "Interior Shampoo + Extraction",
    description:
      "Deep clean your upholstery, removing dirt and stains for a fresh look.",
  },
  {
    imageUrl: "/home/services/id-2.png",
    title: "Leather Cleaning and Conditioning",
    description:
      "Preserve and protect your leather interiors with our specialized treatments.",
  },
  {
    imageUrl: "/home/services/id-3.png",
    title: "2-Month Glass Coating",
    description:
      "Enhance visibility and protect your windows with our durable glass coating.",
  },
  {
    imageUrl: "/home/services/id-4.png",
    title: "3-Month SIO2 Coating",
    description:
      "Experience a hydrophobic effect that keeps your surfaces clean and shiny for longer.",
  },
];

const ceramicCoatingServices: T_SystemXInteriorCoatingService[] = [
  {
    title: "Decontamination Wash & Dry",
  },
  {
    title: "Clay Bar Paintwork",
  },
  {
    title: "Single Machine Polish",
  },
  {
    title: "Decontamination Wash & Dry",
  },
];

const systemXInteriorCoatingServices: T_SystemXInteriorCoatingService[] = [
  {
    title: "Interior Fabric Coating",
    description: "Protect your fabric from stains and wear",
  },
  {
    title: "Revive Interior Plastic Coating",
    description: "Restore and protect your plastic surfaces",
  },
  {
    title: "Glass Coating",
    description: "Add a protective layer to your vehicle's windows",
  },
];

const mechanicalServices: T_BasicSomething[] = [
  {
    imageUrl: "/services/kellian-services/oil.jpg",
    title: "Oil Change",
    description: "Regular oil changes for optimal engine performance.",
  },
  {
    imageUrl: "/services/kellian-services/braking.png",
    title: "Brakes Checking and Servicing",
    description:
      "Ensure your safety with thorough brake inspections and repairs.",
  },
  {
    imageUrl: "/services/kellian-services/oiling.jpg",
    title: "Greasing",
    description: "Maintain moving parts for longevity and smooth operation.",
  },
  {
    imageUrl: "/services/kellian-services/tyre-replacement.png",
    title: "Tyre Car and Replacement",
    description:
      "Keep your tyres in top condition for better handling and fuel efficiency",
  },
];

const managers: T_Manager[] = [
  {
    imageUrl: "/about-us/team/managers/Ian Joseph(Director).jpg",
    role: "Director",
    names: "Ian Joseph",
    description:
      "Leading with vision and experience to ensure top-quality service for every client.",
  },
  {
    imageUrl: "/about-us/team/managers/Agatha Nabwire(Assistant-Director).jpg",
    role: "Assistant Director",
    names: "Agatha Nabwire",
    description:
      "Overseeing daily operations with a focus on client satisfaction and team efficiency.",
  },
  {
    imageUrl: "/about-us/team/managers/Douglas Akhonya(Administrator).jpg",
    role: "Administrator",
    names: "Douglas Akhonya",
    description:
      "Managing administrative tasks with precision and attention to detail.",
  },
  {
    imageUrl: "/about-us/team/managers/Mike Ongamo(Administrator).jpg",
    role: "Administrator",
    names: "Mike Ongamo",
    description:
      "Supporting the day-to-day running of the garage with expertise.",
  },
  {
    imageUrl: "/about-us/team/managers/Charles Muli(Head Technician).jpg",
    role: "Head Technician",
    names: "Charles Muli",
    description:
      "Ensuring the highest technical standards are met in every service we provide.",
  },
];

const technicians: T_Technician[] = [
  {
    imageUrl: "/about-us/team/technicians/Austin Odhiambo.jpg",
    names: "Austin Odhiambo",
    role: "Supervisor",
  },
  {
    imageUrl: "/about-us/team/technicians/Brian Mokaya.jpg",
    names: "Brian Mokaya",
    role: "Mechanical Engineer",
  },
  {
    imageUrl: "/about-us/team/technicians/Kevin Mwendwa.jpg",
    names: "Kevin Mwendwa",
    role: "Mechanical Engineer",
  },
  {
    imageUrl: "/about-us/team/technicians/Mike Godwin.jpg",
    names: "Mike Godwin",
    role: "Mechanical Engineer",
  },
  {
    imageUrl: "/about-us/team/technicians/Dan Ingosi.png",
    names: "Dan Ingosi",
    role: "Mechanical Engineer",
  },
  {
    imageUrl: "/about-us/team/technicians/Ronald Nyongesa.jpg",
    names: "Ronald Nyongesa",
    role: "Mechanical Engineer",
  },
];

export {
  navLinks,
  socials,
  statistics,
  services,
  treatments,
  testimonials,
  faqs,
  workingHours,
  fiveReasonsWhy,
  servicesButtons,
  carWashServices,
  bodyWorks,
  interiorDetailings,
  ceramicCoatingServices,
  systemXInteriorCoatingServices,
  mechanicalServices,
  managers,
  technicians,
};
