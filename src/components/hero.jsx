import React from "react";
import Hero1 from "../assets/images/hero1.jpg";


export default function Hero () {
  return (
    <div>
        <div className="bg-cover w-2/4 h-screen" style={{ backgroundImage: `url(${Hero1})`}}>
        <h1 className="text-black text-center text-5xl font-bold t">Hello! Just Tell Me What You Need</h1>
        <h3 className="font-bold text-2xl my-8">New User?<a href="#"Sign Up></a> Here</h3>
        <h3 className="font-bold text-2xl">Older User?Let's Go</h3>
        
            </div> 
        
        
    </div>

  )
}
