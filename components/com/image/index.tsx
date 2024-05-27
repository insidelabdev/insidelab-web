"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const Loader = ({
  src,
  width,
  height,
  quality = 100,
}: {
  src: String;
  width: Number;
  height?: Number;
  quality?: Number;
}) => {
  //_next/image?url=%2Fimages%2FDMJ-Consultores-%26-Abogados.png&w=128&q=75
  return `https://insidelab.vercel.app/_next/image?url=${src}&w=${width}&q=${quality}`;
};
const ImageComponent = ({
  src,
  alt,
  height = 40,
  width = 200,
  objectPosition = "center",
  objectFit = "cover",
  ...props
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
  objectPosition: string;
  objectFit: string;
}) => {
  const [mounted, setMounted] = useState<Boolean>(false);
  const [params, setParams] = useState({});

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      if (window.location.hostname !== "localhost")
        setParams({ loader: Loader });
      setMounted(true);
    }
  }, [props]);
  if (!mounted) return null;

  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <Image
        alt={alt}
        fill
        objectFit={objectFit}
        objectPosition={objectPosition}
        blurDataURL={"/images/about-photo-carousel-2.png"}
        {...params}
        {...props}
        src={src}
        // loader={window.location.hostname !== "localhost" ? Loader : undefined}
      />
    </div>
  );
};
export default ImageComponent;
