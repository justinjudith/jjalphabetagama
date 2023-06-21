import { IconType } from 'react-icons';
interface Props {
  count: number;
  about: string;
  icon: IconType;
}

const Stats = ({ icon: Icon, count, about }: Props) => {
  return (
    <div className="w-full h-full min-h-[200px] max-w-[200px] lg:max-w-[227px] flex flex-col justify-center items-center gap-4 rounded-lg  shadow-black shadow-md ">
      <Icon className="text-3xl" />
      <h1 className="font-bold text-5xl">{count}</h1>
      <p className="uppercase font-semibold">{about}</p>
    </div>
  );
};

export default Stats;
