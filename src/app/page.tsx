import Hero from '@/Components/Home/Hero/Hero';
import Focus from '@/Components/Home/Focus/Focus';
import Team from '@/Components/Home/Team/Team';
import ContactUs from '@/Components/Home/ContactUs/ContactUs';
import Reviews from '@/Components/Home/Reviews/Reviews';
import Gallery from '@/Components/Home/Gallery/Gallery';
import BASEURL from '@/utils/BASEURL';
import axios from 'axios';
import LogError from '@/utils/LogError';

async function getAwardsData() {
  try {
    const response = await axios.get(`${BASEURL}api/schedule/getCount`);
    return response?.data.count;
  } catch (error) {
    console.log(error);
  }
}
async function getScheduleEvents() {
  const response = await axios.get(`${BASEURL}api/schedule/getSchedule`);
  return response?.data?.Events;
}
async function getSummaryData() {
  const response = await axios.get(`${BASEURL}api/ownerdata/get`);
  return response?.data?.ownerSummaryData;
}
async function getTeamData() {
  const response = await axios.get(`${BASEURL}api/team/get`);
  return response?.data?.teamData;
}
async function getContactData() {
  const response = await axios.get(`${BASEURL}api/contactus/get`);
  return response?.data?.contactData;
}
export default async function Home() {
  const count: any = await getAwardsData();
  const events: any = await getScheduleEvents();
  const ownerSummaryData: any = await getSummaryData();
  const teamData: any = await getTeamData();
  const contactData: any = await getContactData();
  return (
    <>
      <Hero fetchUserSummary={ownerSummaryData} fetchedEvents={events} />
      <Focus />
      <Gallery />
      <Team fetchedTeamData={teamData} />
      <ContactUs fetchedContactData={contactData} />
      <Reviews count={count} />
    </>
  );
}
