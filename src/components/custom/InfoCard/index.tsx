interface IProps {
  src: string;
  title: string;
  info: string;
}

const InfoCard: React.FC<IProps> = ({ info, src, title }) => {
  return (
    <div className="w-[267px] h-[316px] p-6 bg-pink-1 rounded-3xl border-r border-r-purpel-4 flex flex-col gap-y-4">
      <div className="flex flex-col justify-center items-center gap-y-6">
        <div className="bg-white rounded-full p-2">
          <img src={src} alt={title} />
        </div>
        <span className="text-[20px] text-black-1">{title}</span>
      </div>
      <span className="ps-[35px] text-[18px] text-black-1">{info}</span>
    </div>
  );
};

export default InfoCard;
