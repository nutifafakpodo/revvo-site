import {
  Wrench,
  Package,
  Factory,
  Handshake,
  ShieldCheck,
  Truck,
  Car,
  type LucideIcon,
} from "lucide-react";

export type Audience = {
  id: string;
  label: string;
  short: string;
  icon: LucideIcon;
  headline: string;
  intro: string;
  points: string[];
  cta: { label: string; href: string; external?: boolean };
};

/** The six business categories Revvo serves, plus drivers. */
export const AUDIENCES: Audience[] = [
  {
    id: "garages",
    label: "Garages & service bays",
    short: "Log verified work, keep customers coming back.",
    icon: Wrench,
    headline: "A CRM that fills itself every time you log a job.",
    intro:
      "Every service you log becomes a verified passport entry for the customer's car, a customer record for you, and a reminder that brings them back.",
    points: [
      "Log a service in under a minute: plate, work done, mileage, parts used.",
      "Customer database and vehicle history built automatically from real jobs.",
      "Reminders and loyalty points that bring vehicles back to your bay.",
      "Dashboard and analytics: monthly volume, service mix, repeat activity, revenue.",
      "Order parts from verified sellers without leaving the job.",
      "Invite your team; every record carries who logged it.",
    ],
    cta: { label: "Start as a garage", href: "/pilot" },
  },
  {
    id: "parts-sellers",
    label: "Parts resellers",
    short: "Put your inventory in front of every workshop on Revvo.",
    icon: Package,
    headline: "Sell parts to the workshops that are already servicing the cars.",
    intro:
      "Upload your inventory once. Garages searching by make, model or fault see your listings with fitment, condition and stock, and send you purchase requests directly.",
    points: [
      "Bulk CSV upload or add items one by one with photos, fitment and stock.",
      "Requests arrive with the vehicle and job context attached.",
      "Order management: accept, fulfil, track delivery status and notes.",
      "Stock is reserved on order so you never oversell.",
    ],
    cta: { label: "List your inventory", href: "/pilot" },
  },
  {
    id: "manufacturers",
    label: "Parts manufacturers",
    short: "Publish your catalogue and see real demand by vehicle.",
    icon: Factory,
    headline: "Know which parts the market actually needs.",
    intro:
      "Publish catalogue parts to service bays and consumers, and see demand signals tied to real service events instead of guesswork.",
    points: [
      "Catalogue listings with fitment data across makes and models.",
      "Demand visibility from the services being logged every day.",
      "Sell to service bays and consumers through one marketplace.",
    ],
    cta: { label: "Talk to us", href: "/pilot" },
  },
  {
    id: "dealerships",
    label: "Dealerships",
    short: "Every car you sell leaves with a passport.",
    icon: Handshake,
    headline: "Onboard the owner at the point of sale.",
    intro:
      "Record the sale, tie the buyer to the vehicle, and the new owner gets a passport that starts with your dealership. Their service history, reminders and resale proof all begin with you.",
    points: [
      "Record vehicle sales and link buyer details to the passport.",
      "Owner onboarding is triggered automatically after the sale.",
      "Service, CRM and marketplace tools for your workshop too.",
      "A verified provenance story that supports certified pre-owned resale.",
    ],
    cta: { label: "Partner as a dealership", href: "/pilot" },
  },
  {
    id: "insurers",
    label: "Insurance companies",
    short: "Quote on verified service history, not paperwork.",
    icon: ShieldCheck,
    headline: "Renewals that start from real vehicle data.",
    intro:
      "List your coverage products, receive renewal requests from owners who found you through their passport, and follow up with the servicing context that matters.",
    points: [
      "Manage coverage products and see renewal requests in one place.",
      "Owners look up their vehicle, pick a quote and request renewal.",
      "Servicing trends and verified history to inform underwriting.",
      "Pilot flow is request-based: you confirm the policy, no payments are taken on your behalf.",
    ],
    cta: { label: "Become an insurance partner", href: "/pilot" },
  },
  {
    id: "fleets",
    label: "Fleet operators",
    short: "One record for every vehicle you run.",
    icon: Truck,
    headline: "Maintenance you can audit across the whole fleet.",
    intro:
      "Track every fleet vehicle and its maintenance activity, wherever it was serviced, with verified records you can hand to a buyer or an auditor.",
    points: [
      "Vehicle registry with service timelines for each unit.",
      "Reminders for scheduled maintenance across the fleet.",
      "Verified history that holds its value when you dispose of vehicles.",
    ],
    cta: { label: "Bring your fleet", href: "/pilot" },
  },
];

export const DRIVER_AUDIENCE = {
  id: "drivers",
  label: "Drivers & owners",
  short: "Your car's full story, wherever you take it.",
  icon: Car,
};

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What makes a Revvo record \"verified\"?",
    a: "Only authenticated members of a registered business can create service records, and every record stores who created it and where. Owners cannot self-report history into the verified timeline, which is what makes it worth trusting.",
  },
  {
    q: "Do drivers need to install anything?",
    a: "No. After a service the owner gets a link to their vehicle passport by SMS. It opens in any browser. Claiming the vehicle to unlock owner features takes a one-time code sent to the phone on file.",
  },
  {
    q: "What can the public see on a passport?",
    a: "Vehicle details and a summary of verified services. Owner names, phone numbers and emails are never shown publicly, and costs, notes, invoices and photos stay private to the owner and the business.",
  },
  {
    q: "Does Revvo take payments?",
    a: "Not during the pilot. Marketplace orders and insurance renewals are request-based: the seller or insurer confirms and settles with the customer directly. We add payment processing once fulfilment and dispute rules are in place.",
  },
  {
    q: "Where is Revvo available?",
    a: "We are piloting with service bays, parts sellers and an insurance partner in Accra, Ghana. If you operate elsewhere, tell us on the pilot form and we will let you know when we reach you.",
  },
];
