import MeetupList from "../components/meetups/MeetupList";

const Dummy_data = [
  {
    id: "m1",
    title: "Düsseldorf",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/D%C3%BCsseldorf_Panorama.jpg/1280px-D%C3%BCsseldorf_Panorama.jpg",
    address: "Düsseldorf 5. 54879 center",
    discription:
      "Mercer's 2012 Quality of Living survey ranked Düsseldorf the sixth most livable city in the world",
  },
  {
    id: "m2",
    title: "Frankfurt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Frankfurter_Altstadt_mit_Skyline_2019_%28100MP%29.jpg/1024px-Frankfurter_Altstadt_mit_Skyline_2019_%28100MP%29.jpg",
    address: "Frankfurt 5. 54879 center",
    discription:
      "Frangford am Maa, lit. 'Frank ford on the Main'), is the most populous city in the German state of Hesse.",
  },
  {
    id: "m3",
    title: "Berlin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Siegess%C3%A4ule-Berlin-Tiergarten.jpg/1024px-Siegess%C3%A4ule-Berlin-Tiergarten.jpg",
    address: "Berlin 5. 54879 center",
    discription:
      "Berlin straddles the banks of the Spree, which flows into the Havel (a tributary of the Elbe) in the western borough of Spandau",
  },
];
const HomePage = () => {
  return <MeetupList meetups={Dummy_data} />;
};

export default HomePage;
