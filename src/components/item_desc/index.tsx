import { ItemDescProps } from "@/types/item_desc_props";

const ItemDesc = ({ title, desc, image, alt }: ItemDescProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 justify-between">
      <img
        src={image}
        alt={alt}
        className="h-[40rem] w-full rounded-sm object-cover"
      />
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="text-2xl font-sofia font-semibold uppercase tracking-wider">
          {title}
        </span>
        <span className="w-2/3 text-center">{desc}</span>
      </div>
    </div>
  );
};

export default ItemDesc;
