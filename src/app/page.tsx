"use client";

import { useEffect, useRef, useState } from "react";
import { type ItemType, getData } from "@/components/services/shoes-services";
import { handleLeftClick, handleRightClick } from "@/components/carousel/carousel-utils";
import ButtonBar from "@/components/button-bar/button-bar";
import Carousel from "@/components/carousel/carousel";

export default function Home() {
  const [data, setData] = useState<ItemType[]>([]);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async() => {
      setData(await getData());
    })();
  }, []);

  return (
    <main>
      <Carousel
        data={data}
        reference={carousel}
      />
      <ButtonBar
        left={() => handleLeftClick(carousel)}
        right={() => handleRightClick(carousel)}
      />
    </main>
  );
}
