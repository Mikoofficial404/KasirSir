import Hero from "../../components/hero.jsx";
import Testimoni from "../../components/testimoni.jsx";
import Description from "../../components/description.jsx";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimoni />
      <Description />
    </>
  );
}
