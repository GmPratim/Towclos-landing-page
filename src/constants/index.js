import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customer3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe11,
  shoe12,
  shoe13,
  shoe14,
  shoe15,
  shoe16,
  shoe17,
  shoe18,
  shoe19,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "₹11,495",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan 1 Retro High OG",
    price: "₹14,995",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan 4 Retro",
    price: "₹18,995",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan 5 Retro",
    price: "₹17,995",
  },
  {
    imgURL: shoe11,
    name: "Nike Air Jordan 6 Retro",
    price: "₹19,995",
  },
  {
    imgURL: shoe12,
    name: "Nike Air Jordan 11 Retro",
    price: "₹20,995",
  },
  {
    imgURL: shoe13,
    name: "Nike Air Jordan 13 Retro",
    price: "₹16,995",
  },

  {
    imgURL: shoe14,
    name: "Nike Air Jordan-001",
    price: "11,495",
  },
  {
    imgURL: shoe15,
    name: "Air Jordan 1 Retro High OG ",
    price: " ₹14,995",
  },
  {
    imgURL: shoe16,
    name: "NIKE VOMERO 18",
    price: " ₹26,995",
  },
  {
    imgURL: shoe17,
    name: "NIKE VOMERO 18",
    price: " ₹22,995",
  },
  {
    imgURL: shoe18,
    name: "NIKE VOMERO 18",
    price: " ₹29,995",
  },
  {
    imgURL: shoe19,
    name: "NIKE VOMERO 18",
    price: " ₹35,995",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Kr$sna",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Samay",
    rating: 4.7,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer3,
    customerName: "Rakib Hossen",
    rating: 4.9,
    feedback:
      "Oooo Sei Seii, I am very happy with the product. I will buy again.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@twoclos.com", link: "mailto:customer@nike.com" },
      { name: "+1251251255684", link: "tel:+11111111111" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
