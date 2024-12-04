"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

const words = `Welcome To Fetching API Pokemon
      ,Sign in to start Fetching Pokemon!
`;

export const BeforeSignedIn = () => {
  const { isLoaded, userId } = useAuth();

  // Show message only when fully loaded and user is signed out
  if (!isLoaded || userId) {
    return null;
  }

  return (
    <div className="place-content-center text-center min-h-screen text-5xl">
      <h1 className="text-white ">
      <TextGenerateEffect words={words} className="text-white"/>
      </h1>
      <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          Pokemon API Fetching App
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/demo.png"
            height="1000"
            width="1000"
            className="h-80 w-full  rounded-lg group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
    </div>
  );
};
