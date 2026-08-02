import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { CustomCursor } from "@/components/site/custom-cursor";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { FeaturedDishes } from "@/components/site/featured-dishes";
import { About } from "@/components/site/about";
import { TastingMenu } from "@/components/site/tasting-menu";
import { Immersive } from "@/components/site/immersive";
import { Testimonials } from "@/components/site/testimonials";
import { Reservations } from "@/components/site/reservations";
import { Gallery } from "@/components/site/gallery";
import { Footer } from "@/components/site/footer";

const TITLE = "Basilico — Fine Dining & Tasting Menus in Lisbon";
const DESC =
  "Basilico is a twelve-table Mediterranean fine-dining restaurant in Lisbon. Seven-course tasting menus, a 640-bottle cellar and one seating each evening.";
const IMG = "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/restaurant_bg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main className="mx-auto max-w-[1280px] bg-surface">
        <Hero />
        <FeaturedDishes />
        <About />
        <TastingMenu />
        <Immersive />
        <Testimonials />
        <Reservations />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
