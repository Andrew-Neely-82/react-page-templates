import About from "./about/About";
import Collage from "./collage/Collage";
import Contact from "./contact/Contact";
import Dates from "./dates/Dates";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Street from "./street/Street";

export { default as Navbar } from "./navbar/Navbar";
export { default as Collage } from "./collage/Collage";
export { default as About } from "./about/About";
export { default as Dates } from "./dates/Dates";
export { default as Contact } from "./contact/Contact";
export { default as Street } from "./street/Street";
export { default as Footer } from "./footer/Footer";

export const components = [Navbar, Collage, About, Dates, Contact, Street, Footer];
