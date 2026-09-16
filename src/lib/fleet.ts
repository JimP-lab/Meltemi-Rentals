import type { CarCategory } from "./booking-schema";
import economyImg from "@/assets/car-economy.jpg";
import compactImg from "@/assets/car-compact.jpg";
import automaticImg from "@/assets/car-automatic.jpg";
import suvImg from "@/assets/car-suv.jpg";

export type FleetCar = {
  category: CarCategory;
  categoryLabel: string;
  name: string;
  price: number;
  priceLabel: string;
  seats: string;
  luggage: string;
  transmission: string;
  image: string;
  alt: string;
};

export const FLEET: FleetCar[] = [
  {
    category: "economy",
    categoryLabel: "Economy",
    name: "Aegean Mini",
    price: 35,
    priceLabel: "July price",
    seats: "4 seats",
    luggage: "1 suitcase + 1 cabin bag",
    transmission: "Manual · Air conditioning",
    image: economyImg,
    alt: "Small white economy rental car parked on a sunlit Mediterranean street",
  },
  {
    category: "compact",
    categoryLabel: "Compact",
    name: "Island Compact",
    price: 44,
    priceLabel: "Example July price",
    seats: "5 seats",
    luggage: "2 suitcases",
    transmission: "Manual · Air conditioning",
    image: compactImg,
    alt: "Silver compact hatchback rental car parked beside a whitewashed Greek building",
  },
  {
    category: "automatic",
    categoryLabel: "Automatic",
    name: "Dodecanese Auto",
    price: 52,
    priceLabel: "Example July price",
    seats: "5 seats",
    luggage: "2 suitcases",
    transmission: "Automatic · Air conditioning",
    image: automaticImg,
    alt: "Blue automatic rental car parked on a seafront promenade",
  },
  {
    category: "suv",
    categoryLabel: "Family SUV",
    name: "Kos Explorer",
    price: 69,
    priceLabel: "Example July price",
    seats: "5 seats",
    luggage: "3 suitcases",
    transmission: "Manual · Air conditioning",
    image: suvImg,
    alt: "Grey family SUV rental car parked on a Greek island road lined with olive trees",
  },
];
