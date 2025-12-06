import {useEffect, useState} from "react";

function Counter(){
const[count, setCount] = useState (0);
const[EsPar, SetEsPar] = useState(true);

useEffect(() => {
 if (count %2 ===0) {
    SetEsPar (true);
 }else {
    SetEsPar (false);
 }

}, [count]);

return (
 <div className="w-screen text-[#FCFCFD] bg-[#3843D0] h-screen flex flex-col justify-center items-center py-10 px-4">
 <h1 className="text-3xl mb-6 font-semibold">Contador Educa</h1>
 <p className="text-6xl font-bold">{count}</p>

 <button onClick={() => setCount(count +1)}
    className="mt-8 px-6 py-2 text-[#3843D0] border-2 bg-white font-medium rounded-lg hover:bg-[#FCFCFD] transition">
   sumar +1
 </button>


 </div>
)


}

export default Counter;