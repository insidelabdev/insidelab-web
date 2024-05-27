import Card from "@/components/com/card";
import { Wrapper } from "./style";

const ListCard = ({ title, items }: any) => {
  return (
    <Wrapper>
      <h1 className="font-bold text-xl md:text-[35px] pb-4 w-full px-1">
        {title}
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {items.map((item: any, index: number) => (
          <Card
            key={`${item.cover}-${index}`}
            title={item.title}
            cover={item.cover}
            location={item.location}
            actions={item.actions}
          />
        ))}
      </section>
    </Wrapper>
  );
};

export default ListCard;
