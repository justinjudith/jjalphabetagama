import Link from 'next/link';
interface Props {
  style?: string;
  text: string;
  link: string;
}

const NavButton: React.FC<Props> = ({ style, text, link }) => {
  return (
    <Link href={link}>
      <button
        className={`w-full h-full px-5 py-[8px] rounded-[3rem] border font-bold uppercase hover:bg-blue-main hover:text-white ${style}`}
      >
        {text}
      </button>
    </Link>
  );
};
export default NavButton;
