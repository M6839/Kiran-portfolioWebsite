"use client"
import React, { useState, useEffect } from "react";

export default function TypingEffect() {
  const message = "Hello Kiran, welcome to the site!";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + message.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); 

      return () => clearTimeout(timeout); 
    }
  }, [index, message]);

  return (
    <div style={{ fontSize: "20px", fontFamily: "monospace" }}>
      {text}
      <span style={{ animation: "blink 0.6s infinite" }}>|</span>
    </div>
  );
}
