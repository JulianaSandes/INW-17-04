import {useState} from "react"

const Exemplo = (cor) =>{
    //comentário normal
    const[texto, setTexto, setCor] = useState("Teste de comparação Props X State")
    const [corNova, setCorNova] = useState ("black")

    return(
        <div>
            <h1 style={{color : corNova}}>{texto}</h1>
            <button onClick={() => {setTexto("Texto após o click")}}>Mudar o texto</button>
            <button onClick={() => {setCorNova ("#e65a96")}}>Mudar a cor</button>
        </div>
    )
}

export default Exemplo