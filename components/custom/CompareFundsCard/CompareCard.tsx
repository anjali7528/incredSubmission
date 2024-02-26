import { Card } from "../../reusable/card";
import Image from "next/image";

function CompareCard({
  data,
  onCardClick,
}: {
  data: { icon: string; name: string }[];
  onCardClick?: () => void;
}) {
  return (
    <Card
      className="md:flex-1 hover:shadow-md cursor-pointer"
      onClick={onCardClick}
    >
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex gap-5 py-8 px-4 items-center justify-center min-h-28 ">
            <Image src={item.icon} alt="img" height={25} width={30} />
            <div>{item.name}</div>
          </div>
          {index !== data.length - 1 && (
            <div className="py-2 bg-slate-100 flex justify-center items-center">
              VS
            </div>
          )}
        </div>
      ))}
    </Card>
  );
}

export default CompareCard;
