import { BeforeSignedIn } from "./components/BeforeSignedIn";
import { Navigation } from "./components/Navigation";
import PokemonFetcher from "./components/PokemonFetcher";


export default function page() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navigation/>
      <BeforeSignedIn/>
      <PokemonFetcher/>
    </div>
  )
}

