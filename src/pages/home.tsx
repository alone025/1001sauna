"use client";
import { useEffect, useState } from "react";
import Home_bez_gorod from "./home_bez_gorod";
import Home_gorod from "./home_gorod";

function Home(): JSX.Element {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const storedData = localStorage.getItem("cityGorod");
    if (storedData) {
      setCity(storedData);
      setLoading(false);
    } 
    setLoading(false);
  }, []);

  return (
    <div className="main-home-page mt-8">
      {loading ? (
        <p></p>
      ) : (
        <> {!city ? <Home_bez_gorod /> : <Home_gorod city={city} />}</>
      )}
    </div>
  );
}

export default Home;
