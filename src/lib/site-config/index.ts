"use client";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: "Kellian Enterprises",
  description: "We care about your car.",
  logoUrl: "/core/logo-max.png",
  miniLogoUrl: "",
  siteLinks: {
    home: "/",
    servicesSection: "/#services",
    servicesPage: {
      main: "/services",
      carWash: "/services#car-wash",
      bodyWork: "/services#body-work",
      interiorDetailing: "/services#interior-detailing",
      mechanicalServices: "/services#mechanical-services",
      systemXServices: "/services#system-x-services",
      ceramicCoating: "/services#ceramic-coating",
    },
    aboutUs: "/#about-us",
    aboutUsPage: "/about-us",
    contactUs: "/#contact-us",
    bookAService: "/#book-a-service",
    faqsPage: "/faqs",
  },
  navLinkSections: {
    services: {
      left: {
        title: "Our Services",
        description: `
                    At Kellian, we offer a wide range of automotive services tailored to keep your vehicle
                    in top condition. Whether it’s maintenance, repair, or enhancement, our team has you covered.
                    Discover our exceptional services and let us help you enhance your driving experience.
                `,
        siteLink: "/services",
        siteLinkTitle: "Browse Services",
      },
      middle: [
        {
          btnTitle: "Car Maintenance",
          btnLink: "/services#car-wash",
          btnContent:
            "Regular maintenance packages to keep your vehicle performing at its best, including oil changes, tire rotations, and multi-point inspections.",
        },
        {
          btnTitle: "Engine Diagnostics",
          btnLink: "/services#mechanical-services",
          btnContent:
            "Advanced diagnostics to detect and resolve issues early, ensuring your engine runs smoothly and efficiently.",
        },
        {
          btnTitle: "Collision Repair",
          btnLink: "/services#body-work",
          btnContent:
            "Comprehensive repair services for collision-related damages, restoring your vehicle's appearance and performance.",
        },
        {
          btnTitle: "Custom Paint Jobs",
          btnLink: "/services#interior-detailing",
          btnContent:
            "Personalize your car with custom paint services, offering a variety of finishes and colors to make your vehicle truly unique.",
        },
        {
          btnTitle: "Wheel Alignment",
          btnLink: "/services#body-work",
          btnContent:
            "Precise wheel alignment services to improve your vehicle’s handling, increase tire life, and provide a safer driving experience.",
        },
      ],
    },
    aboutUs: {
      left: {
        title: "About Us",
        description: `
                    Kellian is dedicated to providing top-notch automotive services with a customer-first approach.
                    Our skilled technicians are passionate about helping you get the most out of your vehicle. Learn
                    more about our story and commitment to quality.
                `,
        siteLink: "/about-us",
        siteLinkTitle: "Learn More",
      },
      middle: [
        {
          btnTitle: "Our Mission",
          btnLink: "/about-us#mission",
          btnContent:
            "To offer reliable, high-quality automotive services that prioritize customer satisfaction and vehicle safety.",
        },
        {
          btnTitle: "Our Team",
          btnLink: "/about-us#team",
          btnContent:
            "Meet our team of expert technicians and service advisors, who bring years of experience and dedication to every job.",
        },
        {
          btnTitle: "Our Story",
          btnLink: "/about-us",
          btnContent:
            "Founded with a commitment to excellence, we have built a reputation for trusted automotive care and customer loyalty.",
        },
        {
          btnTitle: "Customer Testimonials",
          btnLink: "/#testimonials",
          btnContent:
            "Hear from our valued clients about their experiences with our services and why they choose Kellian time and time again.",
        },
        {
          btnTitle: "Community Engagement",
          btnLink: "/#testimonials",
          btnContent:
            "Kellian is proud to give back to our community through various initiatives and partnerships. Discover how we make an impact.",
        },
      ],
    },
    contactUs: {
      left: {
        title: "Contact Us",
        description: `
                    Have questions or need assistance? Get in touch with our friendly team, and we’ll be happy
                    to help. From service inquiries to booking appointments, we’re here to support you every step
                    of the way.
                `,
        siteLink: "/#contact-us",
        siteLinkTitle: "Get In Touch With Us",
      },
      middle: [
        {
          btnTitle: "Customer Support",
          btnLink: "/#contact-us",
          btnContent:
            "Our support team is ready to assist with your questions. Reach out to us via phone, email, or live chat.",
        },
        {
          btnTitle: "Book a Service",
          btnLink: "/#contact-us",
          btnContent:
            "Schedule your next service with ease using our online booking system or by contacting us directly.",
        },
        {
          btnTitle: "Location & Hours",
          btnLink: "/#contact-us",
          btnContent:
            "Find our nearest location and check our business hours. We look forward to seeing you!",
        },
        {
          btnTitle: "Request a Quote",
          btnLink: "/#contact-us",
          btnContent:
            "Need a quote? Contact us to get an estimate for any of our services, personalized to your vehicle's needs.",
        },
        {
          btnTitle: "Feedback",
          btnLink: "/#contact-us",
          btnContent:
            "Your feedback helps us improve. Share your experience with us to help us serve you better.",
        },
      ],
    },
    faqs: {
      left: {
        title: "Frequently Asked Questions",
        description:
          "Find answers to common questions about our services, booking, emergency support, and more. Our goal is to keep you informed and help you get the most out of your experience with us.",
        siteLink: "/faqs",
        siteLinkTitle: "View All FAQs",
      },
      middle: [
        {
          btnTitle: "What services does Kellian Autogarage offer?",
          btnLink: "/services",
          btnContent:
            "We offer a comprehensive range of auto repair and maintenance services, including oil changes, brake repairs, engine diagnostics, tire rotation, and more.",
        },
        {
          btnTitle: "How can I schedule an appointment?",
          btnLink: "/",
          btnContent:
            "You can easily schedule an appointment using our online booking system on our website or by contacting us directly via phone.",
        },
        {
          btnTitle: "Do you offer emergency auto repair services?",
          btnLink: "/faqs",
          btnContent:
            "Yes, we provide 24/7 emergency auto repair services to assist you in urgent situations.",
        },
        {
          btnTitle: "What are your operating hours?",
          btnLink: "/#contact-us",
          btnContent:
            "We are open Monday to Saturday from 8:00 AM to 6:00 PM. Our emergency services are available around the clock.",
        },
        {
          btnTitle: "How do I know if my car needs maintenance?",
          btnLink: "/",
          btnContent:
            "Signs that your vehicle may need maintenance include unusual noises, warning lights on the dashboard, decreased performance, or if it has been a while since your last service. It’s always best to consult with our technicians.",
        },
      ],
    },
  },
  socialLinks: [
    {
      platform: "Facebook",
      iconCompoment: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=100094674517656",
    },
    {
      platform: "Mobile",
      iconCompoment: Phone,
      link: "https://wa.me/+25495582886",
    },
    {
      platform: "Email",
      iconCompoment: Mail,
      link: "mailto:info@kellianautogarage.com",
    },
  ],
  footerLinks: [
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Our Team",
      link: "/about-us/#team",
    },
    {
      title: "FAQs",
      link: "/faqs",
    },
  ],
  metadata: {
    keywords: "Kellian Enterprises",
    author: "JAK Softwares",
  },
  nextMetada: {
    title: "Kellian Enterprises",
    description: "We care about your car.",
  },
};

export { siteConfig };
