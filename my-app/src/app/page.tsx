"use client";

import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [score, setScore] = useState(0);
  function handleScore() {
    setScore(score + 1);
    console.log(score);
  }
  function resetScore() {
    setScore(0);
  }

  return (
    <div className="bg-[#DDE6D5] font-Fredoka w-screen h-screen flex flex-col justify-around items-center">
      <h1 className="text-amber-900 font-bold text-7xl">Cook Clicker</h1>
      <Image onClick={handleScore} src={"/Cookie.png"} alt="Cookie" width={200} height={200}></Image>
      <div className="Scores flex flex-row items-center justify-around gap-10">
      <div 
      className="bg-amber-900 p-4 text-5xl text-[#DDE6D5] rounded-xl w-auto h-auto">Your Score : {score} 
      </div>
      <button onClick={resetScore} className="bg-amber-900 hover:bg-amber-950 text-[#DDE6D5] p-4 text-5xl rounded-xl w-auto h-auto">Reset score</button>
      </div>
    </div>
  );
}
