import { useEffect } from "react";


function WelcomeMessage(){

    useEffect(() => {
        console.log ("Mensaje de bienvenida de parte de Educa");
    }


)
    return(
<div className = "w-screen bg-[#FCFCFD] h-screen flex justify-center py-10 px-4">
    <h1 className = "text-[#3843D0] text-3xl nt-10 font-semibold">
        bienvenidos a todos 
    </h1>
</div>
    );
}

export default WelcomeMessage;