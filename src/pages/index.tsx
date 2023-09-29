import UserProfileCard from "../../components/UserProfileCard";
import { SliderProvider } from "../../context/SliderContext";
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
