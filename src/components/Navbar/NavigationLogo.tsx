import Image from 'next/image';

interface Props {
  image: string;
  text: string;
}

const NavLogo: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={image} alt={text} width={40} height={40} />
      <h1>{text}</h1>
    </div>
  );
};

export default NavLogo;
