import React from 'react';
import Wrapper from '@/Components/Shared/Wrapper';
import VideoJSON from '../../../Constants/Video.json';
const Videos: React.FC = () => {
  return (
    <Wrapper style="w-full h-full relative ">
      <div className="w-full h-full grid sm:grid-cols-2 md:grid:cols-3 lg:grid-cols-4 gap-5 place-items-center lg:gap-8 mt-16 px-3 md:px-4 lg:px-0">
        {VideoJSON.map(({ id, source, content }: any) => {
          return (
            <iframe
              key={id}
              src={`${source}?autoplay=1&mute=1&enablejsapi=1`}
              title={content}
              allow="autoplay"
              className="w-full h-full"
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Videos;
