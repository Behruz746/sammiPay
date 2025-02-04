import {
  shield,
  star,
  send,
  airbnb,
  binance,
  coinbase,
  dropbox,
  instagram,
  facebook,
  twitter,
  linkedin,
} from "../assets";

const navigationLinks = [
  { id: "home", title: "Bosh sahifa" },
  { id: "product", title: "Mahsulot" },
  { id: "features", title: "Xizmatlar" },
  { id: "clients", title: "Mijozlar" },
];

const statisticsData = [
  {
    id: 1,
    title: "Foydalanuvchi Faol",
    value: "9300+",
  },
  {
    id: 2,
    title: "Kompaniya Homiyligida",
    value: "100+",
  },
  {
    id: 3,
    title: "Tranzaksiya",
    value: "+110M",
  },
];

const features = [
  {
    id: 1,
    icon: star,
    title: "Mukofotlar",
    content:
      "Eng yaxshi kredit karta aksiyalar va sovrinlarning ajoyib kombinatsiyasi taklif qiladi.",
  },
  {
    id: 2,
    icon: shield,
    title: "100% Himoyalangan",
    content:
      "Malumotingiz va tranzaktsiyalaringiz xafsiz ekanligiga ishonch hosil qiling..",
  },
  {
    id: 3,
    icon: send,
    title: "Balansni O'tkazish",
    content:
      "Balansni o'tkazish kredit kartasi sizga foizlarni to'lashga ko'p pul tejashga imkonini beradi.",
  },
];

const feedbacks = [
  {
    id: 1,
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as a driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
  },
  {
    id: 2,
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
  },
  {
    id: 3,
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
  },
];

const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

const footerLinks = [
  {
    title: "Jamiyat",
    links: [
      {
        name: "Yordam Markazi",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Hamkorlar",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Takliflar",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Yangiliklar",
        link: "https://www.sammi.ac/newsletters/",
      },
    ],
  },
  {
    title: "Foydali havola",
    links: [
      {
        name: "Kontent",
        link: "https://www.sammi.ac/content/",
      },
      {
        name: "Qanday ishlaydi",
        link: "https://www.sammi.ac/how-it-works/",
      },
      {
        name: "Shartlar & Xizmatlar",
        link: "https://www.sammi.ac/terms-and-services/",
      },
    ],
  },
  {
    title: "Hamkor",
    links: [
      {
        name: "Bizning hamkorimiz",
        link: "https://www.sammi.ac/our-partner/",
      },
      {
        name: "Hamkor Bo'ling",
        link: "https://www.sammi.ac/become-a-partner/",
      },
    ],
  },
];

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export {
  navigationLinks,
  statisticsData,
  features,
  feedbacks,
  clients,
  footerLinks,
  socialMedia,
};
