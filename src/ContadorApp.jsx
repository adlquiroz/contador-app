import { useState } from "react"
export const ContadorApp = ({ value }) => {

    const [contador, setContador] = useState(value);
    const [reset, setReset] = useState(value);


    const handleClick = () => {

        setContador(contador + 1)
        console.log(setContador)

    }

    const resetClick = () => {

        setContador(0)
        console.log(setContador)

    }
    return (
        <>
            <h1 >Contador:</h1>
            <p class>{contador}</p>
            <button class="countButton" onClick={handleClick} > Count </button>
            <button class="resetButton" onClick={resetClick} > reset </button>
           
        </>
    )
}