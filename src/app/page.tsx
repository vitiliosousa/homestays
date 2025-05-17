import PlanYourPerfectTrip from "@/components/landing/PlanYourPerfectTrip";
import FindStays from "@/components/landing/FindStays";
import Stays from "@/components/landing/Stays";
import FlightsHotels from "@/components/landing/FlightsHotels";
import Reviews from "@/components/landing/Reviews";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="h-full w-full flex font-montserrat flex-col items-center">
      <FindStays/>
      <Stays/>
      <PlanYourPerfectTrip/>
      <FlightsHotels/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
