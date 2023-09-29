import Image from "next/image";
import UserProfileCard from "../../components/UserProfileCard";
import SliderComponent from "../../components/SliderComponent";
import ProgressBar from "../../components/ProgressBar";
import { SliderProvider } from "../../context/SliderContext";
import { Slider } from "antd";
import ActivityForm from "../../components/ActivityForm";

export default function Home() {
  return (
    <main className="font-custom">
      
        <UserProfileCard />
        <SliderProvider>
        <ActivityForm/>
      </SliderProvider>
    </main>
  );
}
