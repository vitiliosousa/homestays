import PlaceCard from "@/components/PlaceCard";
import { places } from "@/data/places";

export default function Favourites() {
  return (
    <div className="h-full w-full flex font-montserrat flex-col items-center">
      <div className="w-4/5 py-10 flex flex-col space-y-4">
        <h1 className="text-2xl font-semibold">Favourites</h1>
        <div className="bg-white w-full shadow-lg py-6 px-4 flex items-center rounded-lg">
          <div className="h-10 w-px bg-black mx-4" />
          <div>
            <h2 className="font-semibold">Places</h2>
            <p className="text-xs">3 marked</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}
