import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Hero />
        <Stats />
      </div>
    </PageTransition>
  );
}
