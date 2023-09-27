"use client";
import SkeletonLoading from "@/components/skeletonLoading";
import { retrieveData } from "@/utils/retrieveData";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function MainTypewriter() {
  const [typewriterContent, setTypewriterContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const typewriterContents = await retrieveData("typewriter");
      const contentArray = typewriterContents.map((doc) => doc.typewriter);
      setTypewriterContent(contentArray);
    };
    fetchData();
  }, []);

  if (!typewriterContent || typewriterContent.length === 0) {
    return <SkeletonLoading size="4" />;
  }

  return (
    <div className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      <Typewriter
        words={typewriterContent}
        loop={0}
        cursor
        cursorColor="purple"
      />
    </div>
  );
}
