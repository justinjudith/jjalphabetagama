import Image from 'next/image';
import InfoBox from './InfoBox';
interface PersonalSummary {
  fetchUserSummary?: any;
}

const PersonalSummary = ({ fetchUserSummary }: PersonalSummary) => {
  const {
    dateOfBirth,
    age,
    gender,
    location,
    totalEvents,
    yearOfExperience,
    availableLocation,
    rateLevel,
    averageEventPrice,
    currentLocation,
    img,
  } = fetchUserSummary;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 py-10 rounded-2xl shadow-black shadow-md">
      <div className="w-[100px] h-[100px] relative rounded-full ">
        <Image src={img} alt="" fill className="object-contain" />
      </div>
      <h1 className="font-bold text-2xl">My Summary</h1>
      <div className="w-full h-full grid text-center">
        <InfoBox Name="Date of Birth/Age" Value={`${dateOfBirth} ${age}`} />
        <InfoBox Name="Gender" Value={gender} />
        <InfoBox Name="Location" Value={location} />
        <InfoBox Name="Years of Experience" Value={yearOfExperience} />
        <InfoBox Name="Total Events" Value={totalEvents} />
        <InfoBox Name="Available Location" Value={availableLocation} />
        <InfoBox Name="Rate Level" Value={rateLevel} />
        <InfoBox Name="Arrange Event Price" Value={averageEventPrice} />
        <InfoBox Name="Current Location" Value={currentLocation} />
      </div>
    </div>
  );
};

export default PersonalSummary;
