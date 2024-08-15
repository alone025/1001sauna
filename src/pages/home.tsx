"use client";
import { useState } from "react";
import Home_bez_gorod from "./home_bez_gorod";
import Home_gorod from "./home_gorod";

function Home(): JSX.Element {
  const [city, setCity] = useState("Moskva");

  return (
    <div className="main-home-page mt-8 mx-4 sm:mx-[20px] xl:mx-0">
      {!city ? <Home_bez_gorod /> : <Home_gorod city={city} />}
    </div>
  );
}

export default Home;
