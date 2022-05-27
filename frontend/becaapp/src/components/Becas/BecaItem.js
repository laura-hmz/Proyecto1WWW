import React from "react";
import * as BecasServer from './BecasServer';
import { useNavigate } from 'react-router-dom';
import imagen2 from '../Imagenes/imagen2.jpg';
//import imagen1 from '../Imagenes/imagen1.jpg';
//Se ponen las tarjetas que se van a listar
import './becaItem.css';

function BecaItem({ beca, listBecas }) {
    const navigate = useNavigate();

    const handDelete = async (becaUrl) => {
        await BecasServer.deleteBeca(becaUrl);
        console.log(becaUrl);
        listBecas();

    };

    //const getPenultimoItem = thePath => (thePath.substring(thePath.lastIndexOf('/') - 1)).slice(0, -1);
    //const getUltimoItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
    const kkk = thePath => thePath.slice(27);

    const prueba = async (becaID) => {
        console.log(becaID);
        console.log(kkk(becaID));



    };



    //<button onClick={() => navigate(`/updateBeca/${ getUltimoItem(beca.url)}`)} className="btn btn-info my-2">Actualizar información</button>
    return (
        <div className="col-md-4 mb-4">
            <div className="card text-center">
                <img onClick={() => navigate(`/detallesBecas/${kkk(beca.url)}`)} src={imagen2} alt="" />
                <div className="card card-body">
                    <h3 className="card-title">{beca.nombre}</h3>
                    <p class="h5" className="card-text">Categoría: <strong> {beca.categoria} </strong></p>
                    <button onClick={() => navigate(`/detallesBecas/${kkk(beca.url)}`)} className="btn ">Click para más detalles</button>
                    <button onClick={() => beca.url && handDelete(beca.url)} className="btn btn-danger my-2">Eliminar Beca</button>
                    <button onClick={() => navigate(`/updateBeca/${kkk(beca.url)}`)} className="btn btn-info my-2">Actualizar información</button>

                </div>
            </div>
        </div>
    );

}

export default BecaItem;