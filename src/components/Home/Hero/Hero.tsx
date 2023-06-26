import Wrapper from '../../Shared/Wrapper';
import AutoSlider from '@/Components/Shared/AutoSlider';
import PersonalSummary from './Summary/PersonalSummary';
import Schedule from './Schedule/Schedule';

interface HeroProps {
  fetchedEvents?: any;
  fetchUserSummary?: any;
}

function Hero({ fetchedEvents, fetchUserSummary }: HeroProps) {
  return (
    <>
      <Wrapper id="profile" style="w-full h-[100vh-80px] mt-16">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-center text-xl md:text-3xl font-bold">
            JJMilian Event Managment Support
          </h1>
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            Loretta Magalen Justin
          </h1>
        </div>
        <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-8 px-6 lg:px-0 md:px-4">
          <PersonalSummary fetchUserSummary={fetchUserSummary} />
          <div className="w-full  max-w-[350px] h-full grid rounded-2xl shadow-black shadow-md">
            <div className="w-full h-full max-w-[350px] max-h-[600px] mx-auto my-auto">
              <AutoSlider />
            </div>
          </div>
          <Schedule fetchedEvents={fetchedEvents} />
        </div>
      </Wrapper>
    </>
  );
}

export default Hero;
