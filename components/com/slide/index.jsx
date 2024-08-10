"use client";
import { useEffect, useRef, useState } from "react";
import { Wrapper } from "./style";
import Image from "@/components/com/image";
import clsx from "clsx";
import Slider from "react-slick";
import { isMobile } from "react-device-detect";
import { Card, CardHeader } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftIcon, ArrowRightIcon, ImageIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
const default_settings = {
  dots: false, // Disable the default dots
  arrows: false, // Disable the default arrows
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  swipeToSlide: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    /* 
      xs: "360px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    */
  ],
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      {...props}
      className={clsx("rounded-[50%] bg-primary border-0", className)}
      isIconOnly
      color="primary"
      variant="faded"
      onClick={onClick}
    >
      <ArrowRightIcon />
    </Button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      {...props}
      className={clsx("rounded-[50%] bg-primary border-0", className)}
      isIconOnly
      color="primary"
      variant="faded"
      onClick={onClick}
    >
      <ArrowLeftIcon />
    </Button>
  );
};

const Item = ({ record, size, index, activeDotIndex, ...props }) => {
  return (
    <div
      key={index}
      className={clsx(
        "relative",
        `slide ${index === activeDotIndex ? "slide-active" : ""}`
      )}
    >
      <div
        style={{
          height: size,
        }}
        className={clsx("relative", "px-6 py-4 mx-1")}
      >
        <Image
          key={`${record.src}-${index}`}
          fill
          className="h-full w-full"
          objectFit="cover"
          src={record.src}
          placeholder="blur"
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg=="
          }
          alt={record.label}
        />
        {record.tag && (
          <div
            className={clsx(
              "absolute bottom-6 right-1 z-20",
              record.tagFade && "tags-container opacity-0"
            )}
          >
            <div className="tag rounded-[10px] flex flex-start gap-1 items-center p-[10px]">
              <span
                className={clsx(
                  "tag-label text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#fff] font-bold tracking-wide transition-transform duration-200"
                , activeDotIndex === index ? "scale-100 opacity-100" : "opacity-50 scale-85")}
              >
                {record.tag}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Slide = ({ title, size = 200, items, theme = "light", itemLayout,  ...props }) => {
  const [settings, setSettings] = useState({});
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(4);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [mounted, setMounted] = useState(false);
  const [isInfinite, setIsInfinite] = useState(false);
  const [showArrows, setShowArrows] = useState(true);
  const [showDots, setShowDots] = useState(true);
  const dotsContainerRef = useRef(null);
  const slider = useRef(null);
  const handleDotClick = (index) => {
    setActiveDotIndex(index);
    if (slider.current) slider.current.slickGoTo(index); // Go to the selected slide
  };
  const defaultRenderItem = (record, index) => {
    return (
      <Item
        size={size}
        record={record}
        index={index}
        items={items}
        activeDotIndex={activeDotIndex}
      />
    );
  };
  const renderCustomDots = () => {
    return items.map((_, index) => (
      <li
        key={index}
        className={`dot ${index === activeDotIndex ? "slick-active" : ""}`}
        onClick={() => handleDotClick(index)}
      >
        <button>{index + 1}</button>
      </li>
    ));
  };
  const calculateLeftPosition = () => {
    const dotWidth = 24; // Adjust based on your dot styling
    const dotMargin = 10; // Adjust based on your dot styling

    const containerWidth = dotWidth * 3 + dotMargin * 2; // Assuming 3 visible dots
    const paterWidth = (dotWidth + dotMargin) * items.length;
    if (activeDotIndex == 0) return "40px";
    return `calc(20% - ${
      activeDotIndex * (dotWidth + dotMargin) - containerWidth / 2
    }px)`;
  };
  useEffect(() => {
    if (props.settings) {
      let { dots, arrows, ...settings } = props.settings;

      if (typeof arrows != "undefined") setShowArrows(arrows);
      if (typeof dots != "undefined") setShowDots(dots);
      setSettings({
        ...default_settings,
        ...settings,
      });
    }
  }, [props.settings]);
  useEffect(() => {
    if (!props.settings) setSettings(default_settings);
  }, []);

  useEffect(() => {
    if (settings) {
      let { slidesToScroll, slidesToShow, infinite } = settings;
      setIsInfinite(infinite);
      /*   setSlidesToScroll(items.length <= slidesToScroll ? items.length : 1);
      setSlidesToShow(
        items.length <= slidesToShow ? items.length : slidesToShow
      ); */
      setSlidesToScroll(1);
      setSlidesToShow(1);
      /* setShowArrows(items.length > slidesToScroll);
      setShowDots(items.length > slidesToScroll); */
    }
  }, [settings]);
  useEffect(() => {
    if (size) {
      setMounted(true);
    }
  }, [size]);
  if (!mounted)
    return (
      <Wrapper theme={theme} className="container my-0 mx-auto">
        <div className={clsx("overflow-hidden p-[10px]", `h-[${size + 10}px]`)}>
          <div
            className={clsx(
              "grid",
              "gap-1",
              "place-content-start",
              "place-items-place-content-start",
              "whitespace-nowrap min-w-screen",
              `h-[${size}px]`,

              "xl:grid-cols-4",
              "lg:grid-cols-3",
              "sm:grid-cols-2",
              "md:grid-cols-2",
              "xs:grid-cols-1"
            )}
          >
            {Array.from(
              {
                length: 4,
              },
              (_, index) => index + 1
            ).map((it, index) => (
              <Card
                key={index}
                shadow={"none"}
                className={clsx(
                  "flex",
                  "w-full space-y-5 p-4",
                  `h-[${size}px]`,
                  theme == "dark" ? "bg-[#70707038]" : "bg-[#e7e7e7]",
                  index > 1
                    ? "sm:hidden md:hidden xs:hidden lg:flex xl:flex"
                    : "",
                  index == 1 ? "xs:hidden sm:flex md:flex lg:flex xl:flex" : ""
                )}
                radius="lg"
              >
                <CardHeader
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  className="flex-col justify-center items-center"
                >
                  <ImageIcon
                    size={100}
                    style={{
                      opacity: 0.5,
                    }}
                    color={theme == "dark" ? "#FFF" : "#939393"}
                    alt="slide-alt"
                  />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  if (!settings) return null;
  return (
    <Wrapper theme={theme}>
      {(title || showArrows) && (
        <div
          className={clsx(
            "slide-head flex gap-1 justify-between items-center xl:flex-row  lg:flex-row md:flex-row sm:flex-row xs:flex-row",
            "xs:px-4",
            "xs:pb-4 xs:pt-4"
          )}
        >
          {title && (
            <div className="slide-title flex justify-start items-center">
              <h3
                className={clsx(
                  "title text-lg mb-0 md:text-xl font-bold w-full text-left md:text-start md:pl-[26px] mb-0 slide-title",
                  theme === "dark" ? "text-white" : "text-background"
                )}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          )}
          {showArrows && (
            <div className="flex xl:justify-start items-center gap-1 justify-end my-2">
              <PrevArrow
                isDisabled={!isInfinite && activeDotIndex == 0}
                onClick={() => {
                  if (slider.current) slider.current.slickPrev();
                }}
              />
              <NextArrow
                isDisabled={
                  !isInfinite &&
                  activeDotIndex >= items.length - slidesToScroll &&
                  activeDotIndex <= items.length - 1
                }
                onClick={() => {
                  if (slider.current) slider.current.slickNext();
                }}
              />
            </div>
          )}
        </div>
      )}
      <section className="slider">
        <Slider
          {...settings}
          ref={slider}
          slidesToScroll={slidesToScroll}
          slidesToShow={slidesToShow}
          beforeChange={(_, next) => {
            setActiveDotIndex(next);
          }}
        >
          {items.map((item, index) => defaultRenderItem(item, index))}
        </Slider>
        {showDots && (
          <div className="relative h-[50px] mt-2 max-w-[180px] overflow-hidden mx-auto flex justify-center">
            {
              <ul
                ref={dotsContainerRef}
                className="slick-dots"
                // style={{ left: calculateLeftPosition() }}
              >
                {renderCustomDots()}
              </ul>
            }
          </div>
        )}
      </section>
      <style jsx global>{`
        .slick-track {
          max-height: ${size + 40}px;
          overflow: hidden;
          // display: flex;
          // justify-content: center;
          ${!isMobile && itemLayout == "center" && `display: flex; justify-content: center;`}
        }
      `}</style>
    </Wrapper>
  );
};

export default Slide;
