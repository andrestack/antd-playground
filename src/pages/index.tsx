import Image from "next/image";
import UserProfileCard from "../../components/UserProfileCard";
import SliderComponent from "../../components/Slider";
import ProgressBar from "../../components/ProgressBar";

export default function Home() {
  return (
    <main className="font-custom">
      <UserProfileCard />
      <SliderComponent />
      <SliderComponent />
      <SliderComponent />
      <ProgressBar/>

    </main>
  );
}
