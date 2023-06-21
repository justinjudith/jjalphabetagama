import Wrapper from '@/Components/Shared/Wrapper';
import Heading from '@/Components/Shared/Headings/Heading';
import SubHeading from '@/Components/Shared/Headings/SubHeading';
import TeamCard from './TeamCard';

interface TeamProps{
  fetchedTeamData:any;
}

function Team({ fetchedTeamData }:any) {
  return (
    <Wrapper id="team" style="w-full h-full mt-20">
      <div className="w-full h-full flex flex-col items-center">
        <Heading text="Team" />
        <SubHeading
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima totam
          quidem deserunt odio voluptatibus esse odit adipisci autem, ut saepe?"
        />

        <div className="w-full h-full flex flex-wrap justify-center gap-[3.7rem] mt-8">
          {fetchedTeamData.map(
            ({
              _id,
              memberName,
              category,
              about,
              instagramURL,
              twitterURL,
              faceBookURL,
            }: any) => {
              return (
                <TeamCard
                  key={_id}
                  memberName={memberName}
                  category={category}
                  about={about}
                  faceBookURL={faceBookURL}
                  instagramURL={instagramURL}
                  twitterURL={twitterURL}
                />
              );
            }
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Team;
