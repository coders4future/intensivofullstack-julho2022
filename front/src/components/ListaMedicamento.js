import React, { useState, useEffect } from "react";
import axios from "axios";

function ListaMedicamento() {

    const [lista, setLista] = useState(null);
    const [nome, setNome] = useState('');

    function registroClick() {

        const pMedicamento = {
            nome: nome,
            codigo_barras: "89898"
        }

        axios.post("http://localhost:3001/medicamentos/incluir", pMedicamento )
            .then(res => {
                console.log('será que funcionou');
                setNome('');
                AtualizaInformacao();
            })
    }

    function AtualizaInformacao() {
        axios.get("http://localhost:3001/medicamentos")
            .then(res => {
                console.log('vai aparecer os dados');
                console.log(res.data);
                setLista(res.data);
            })
    }

    useEffect(() => {
        AtualizaInformacao();
    }, [])

    if (!lista) return null;

    return (
        <div>
            <div>
                Nome do Medicamento
                <input
                    id={'medicamento_nome'}
                    type={'text'}
                    value={nome}
                    placeholder={'Nome do Medicamento'}
                    onChange={event => {
                        setNome(event.target.value);
                    }}
                />
                <br />Valor digital: {nome}<br />
                <button onClick={registroClick}>Registro</button>
            </div>
            aqui vai aparecer a lista...<br />
            <ul>
                <li>aturgil</li>
                <li>vitamina C</li>
            </ul>
            <ul>
                {lista.map(objeto => <li>{objeto.medicamento_nome}</li>)}
            </ul>


        </div>
    )
}

export default ListaMedicamento;