import { NewYork, Paris, SanFran } from "../../img/export.js";

export const header = [
  {
    head: "TOUR DATES",
    text: "Remember to book your tickets!",
  },
];

export const months = [
  {
    month: "September",
    isSoldOut: true,
    hasBadge: false,
  },
  {
    month: "October",
    isSoldOut: true,
    hasBadge: false,
  },
  {
    month: "November",
    isSoldOut: false,
    hasBadge: true,
  },
];

export const places = [
  {
    img: NewYork,
    alt: "New York from above",
    place: `New York`,
    date: `Fri 27 Nov 2016`,
    desc: `Praesent tincidunt sed tellus ut rutrum sed vitae justo.`,
  },
  {
    img: Paris,
    alt: "Eiffel Tower in Paris",
    place: `Paris`,
    date: `Sat 28 Nov 2016`,
    desc: `Praesent tincidunt sed tellus ut rutrum sed vitae justo.`,
  },
  {
    img: SanFran,
    alt: "The Golden Gate Bridge in San Francisco",
    place: `San Francisco`,
    date: `Sun 29 Nov 2016`,
    desc: `Praesent tincidunt sed tellus ut rutrum sed vitae justo.`,
  },
];
