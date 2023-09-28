import Image from "next/image";
import UserProfileCard from "../../components/UserProfileCard";
import SliderComponent from "../../components/Slider";
import ProgressBar from "../../components/ProgressBar";
import { SliderProvider } from "../../context/SliderContext";
import { Slider } from "antd";

export default function Home() {
  return (
    <main className="font-custom">
      
        <UserProfileCard />
        <SliderProvider>
        <SliderComponent />
        <SliderComponent />
        <SliderComponent />
        <ProgressBar hours={undefined} />
      </SliderProvider>
    </main>
  );
}
