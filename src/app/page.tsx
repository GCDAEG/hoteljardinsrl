import HeroSection from "../components/layout/Home/sections/HeroSection";

import LocationSection from "@/components/layout/Sections/LocationSection";

import { SanityDocument } from "next-sanity";
import ServicesSection from "@/components/layout/Home/sections/ServicesSection";
import RoomsSection from "@/components/layout/Home/sections/RoomsSection";
import GallerySection from "@/components/layout/Home/sections/GallerySection";
import AboutSection from "@/components/layout/Home/sections/AboutSection";
import TestimonialsSection from "@/components/layout/Home/Testimonials";
// export const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

// export const lora = Lora({
//   subsets: ["latin"],
//   display: "optional",
//   variable: "--font-lora",
// });

// export const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-montserrat",
// });

// export const title = lora.className;
// export const titleH2 = montserrat.className;
// export const base = roboto.className;

// const POSTS_QUERY = `*[
//   _type == "product"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, name, slug, image, category, description, price, publishedAt}`;

// const options = { next: { revalidate: 30 } };
export default async function Home() {
  // const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const posts: SanityDocument[] = [];
  console.log("los posts", posts);
  return (
    <main
      className={`min-h-screen w-full font-base lg:max-w-6xl shadow-md overflow-x-hidden`}
    >
      <HeroSection />
      <ServicesSection></ServicesSection>
      <RoomsSection></RoomsSection>
      <GallerySection></GallerySection>
      <AboutSection></AboutSection>
      <LocationSection />
      <TestimonialsSection></TestimonialsSection>
    </main>
  );
}
