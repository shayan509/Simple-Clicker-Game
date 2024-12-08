"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false); // State for click effect

  function handleScore() {
    setScore(score + 1);
    setIsClicked(true); // Trigger the click effect
    setTimeout(() => setIsClicked(false), 200); // Reset the click effect after 200ms
  }

  function resetScore() {
    setScore(0);
  }

  return (

    <div className="bg-[#DDE6D5] w-screen h-screen flex flex-col justify-around items-center">
      
      <h1 className="text-amber-900 font-bold text-7xl mobile:text-5xl">Cookie Clicker</h1>
      <Image
        onClick={handleScore}
        src={"/Cookie.png"}
        alt="Cookie"
        width={200}
        height={200}
        className={`cursor-pointer transform transition duration-200 ${
          isClicked ? "scale-90" : "scale-100"
        }`}
      />
      <div className="Scores flex flex-row mobile:flex-col items-center justify-around gap-10">
        <div className="bg-amber-900 p-4 text-5xl mobile:p-4 mobile:text-4xl text-[#DDE6D5] rounded-xl w-auto h-auto">
          Your Score: {score}
        </div>
        <button
          onClick={resetScore}
          className="bg-amber-900 hover:bg-amber-950 mobile:p-4 mobile:w-[237.867px] mobile:text-4xl text-[#DDE6D5] p-4 text-5xl rounded-xl w-auto h-auto"
        >
          Reset score
        </button>
      </div>
    </div>
  );
}
