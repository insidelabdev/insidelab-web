import { Wrapper } from "./style";
import clsx from "clsx";
import Slide from "../slide";

const Gallery = ({
  title,
  description,
  settings,
  theme = "light",
  className,
  items,
  size = 300,
  style,
  itemLayout,
}: any) => {
  return (
    <Wrapper
      theme={theme}
      style={style}
      className={clsx("gallery-" + theme, className)}
    >
      <section className="pt-2 pb-4 px-6 max-w-[760px] text-center text-[26px] sm:text-[38px] leading-[26px] sm:leading-[45px] font-bold">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className="title gallery-title"
        />
        <p className="text-md sm:text-[22px] font-semibold gallery-description pt-6">
          {description}
        </p>
      </section>
      <section className="w-screen">
        <Slide
          theme={theme}
          size={size}
          items={items}
          itemLayout={itemLayout}
          settings={{
            infinite: true,
            arrows: true,
            dots: true,
            slidesToScroll: 4,
            slidesToShow: 4,
            ...settings,
          }}
        />
      </section>
    </Wrapper>
  );
};

export default Gallery;
