import Link from 'next/link';
import Wrapper from '../../Shared/Wrapper';
import Heading from '@/Components/Shared/Headings/Heading';
import SubHeading from '@/Components/Shared/Headings/SubHeading';
import FocusTab from './FocusTab';
import FocusJSON from '../../../Constants/Focus.json';
function Focus() {
  return (
    <Wrapper id="focus" style="w-full h-full">
      <div className="w-full h-full flex justify-center items-center flex-col mt-20">
        <Heading text="Our main focus Areas" />
        <Link href="#contactus">
          <button className="w-[150px] h-[50px]  absolute hidden md:flex justify-center items-center  top-0 right-0 bg-blue-main px-5 py-[8px] rounded-[3rem] border font-bold capitalize">
            Contact Us
          </button>
        </Link>
        <SubHeading
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolorem explicabo deleniti? Eveniet reprehenderit sint libero
          quibusdam magni perspiciatis placeat maiores quia dolor repellat?
          Explicabo quae deserunt cum. Tenetur dignissimos deserunt error
          voluptates perferendis optio eum veniam quos obcaecati neque."
        />
        {/* <p className="text-center max-w-4xl mx-auto text-lg px-6">
          
        </p> */}
        <div className="w-full h-full md:max-w-4xl lg:max-w-6xl px-3 md:px-0 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center mt-8">
          {FocusJSON?.map(({ id, text, image }: any) => {
            return <FocusTab key={id} text={text} image={image} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Focus;
