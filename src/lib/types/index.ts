type T_NavLink = {
  name: string;
  link: string;
  nameKey: T_NavLinkSectionOption;
};

type T_WhatsAppSocial = { label: string; value: string };

type T_Social = {
  text: string;
  icon: any;
  socialInfo: string | T_WhatsAppSocial[];
  variant: "link" | "button" | "dropdown";
};

type T_Statistic = {
  name: string;
  value: number;
};

type T_BasicSomething = {
  imageUrl?: string;
  title: string;
  description: string;
};

type T_HomeService = {
  imageUrl?: string;
  title: string;
  description: string;
  serviceLink: string;
};

type T_Faq = {
  question: string;
  answer: string;
};

type T_NavLinkSectionOption =
  | "services"
  | "aboutUs"
  | "contactUs"
  | "faqs"
  | null;

type T_WorkingHour = {
  day: string;
  time: string;
};

type T_ServiceButton = {
  text: string;
  sectionId: string;
};

type T_SystemXInteriorCoatingService = {
  title: string;
  description?: string;
};

type T_Manager = {
  imageUrl: string;
  role: string;
  description: string;
  names: string;
};

type T_Technician = {
  imageUrl: string;
  role: string;
  names: string;
};

export type {
  T_NavLink,
  T_Social,
  T_Statistic,
  T_BasicSomething,
  T_Faq,
  T_NavLinkSectionOption,
  T_WorkingHour,
  T_ServiceButton,
  T_SystemXInteriorCoatingService,
  T_HomeService,
  T_Manager,
  T_WhatsAppSocial,
  T_Technician,
};
