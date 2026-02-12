
import { useEffect, useState } from "react";


interface Pokemon {
 id: number;
 name: string;
 sprites: {
   other: {
     "official-artwork": {
       front_default: string;
     };
   };
 };
 types: {
   slot: number;
   type: {
     name: string;
   };
 }[];
 height: number;
 weight: number;
}


function App() {
 const [pokemon, setPokemon] = useState<Pokemon | null>(null);
 const [loading, setLoading] = useState(true);


 useEffect(() => {
   getPokemon();
 }, []);


 const getPokemon = async () => {
   try {
     const response = await fetch(
       "https://pokeapi.co/api/v2/pokemon/ditto"
     );
     const data = await response.json();
     setPokemon(data);
     setLoading(false);
   } catch (error) {
     console.error("Error fetching pokemon", error);
     setLoading(false);
   }
 };


 if (loading) {
   return (
     <div className="flex w-screen h-screen items-center justify-center bg-gray-50">
       <div className="text-gray-500">Loading...</div>
     </div>
   );
 }


 return (
   <div className="flex w-screen min-h-screen p-4 justify-center items-center bg-gray-50">
     {pokemon && (
       <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80 border-2 border-gray-200">
         {/* Header */}
         <div className="bg-purple-100 p-4">
           <div className="flex justify-between items-center">
             <h1 className="text-2xl font-bold text-gray-800 capitalize">
               {pokemon.name}
             </h1>
             <div className="bg-white text-gray-700 font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
               #{pokemon.id}
             </div>
           </div>
         </div>


         {/* Image */}
         <div className="flex justify-center p-4 bg-white">
           <img
             src={pokemon.sprites.other["official-artwork"].front_default}
             alt={pokemon.name}
             className="w-48 h-48"
           />
         </div>


         {/* Type */}
         <div className="px-4 pt-2">
           <div className="flex gap-2 justify-center">
             {pokemon.types.map((typeInfo, index) => (
               <span
                 key={index}
                 className="px-4 py-1 bg-purple-400 text-blue-800 rounded-full text-sm font-medium"
               >
                 {typeInfo.type.name}
               </span>
             ))}
           </div>
         </div>


         {/* Stats */}
         <div className="p-4">
           <div className="grid grid-cols-2 gap-3 mb-4">
             <div className="text-center p-2 bg-gray-50 rounded">
               <div className="text-gray-500 text-xs">Height</div>
               <div className="font-bold">{pokemon.height / 10} m</div>
             </div>
             <div className="text-center p-2 bg-gray-50 rounded">
               <div className="text-gray-500 text-xs">Weight</div>
               <div className="font-bold">{pokemon.weight / 10} kg</div>
             </div>
           </div>
         </div>
       </div>
     )}
   </div>
 );
}


export default App;
