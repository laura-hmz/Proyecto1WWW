import React, { useEffect, useState } from 'react'

//Components:
import BecaItem from './BecaItem';
import * as BecasServer from './BecasServer';
import Slider from '../Slider/Slider';

const BecasListPopulares = () => {
    const [becasp, setBecasp] = useState([]);
    const listBecas = async () => {
        try {
            const res = await BecasServer.listBecas();
            const data = await res.json();
            setBecasp(data);
            //console.log(data)
        } catch (error) {
            console.log(error);
        }
    };

    //se le da arreglo vacio para que apenas se renderice, se listen los componentes solo una vez
    useEffect(() => {
        listBecas();
    }, []);

    return (
        <div className='row'>
            <Slider/> 
            <h3 class="h1 " className>Becas populares</h3>
            {becasp.slice(0,3).map((beca) => (  
                //<h2> {beca.nombre} </h2>
                //<BecaItem key={beca.key} beca={beca} />
                <BecaItem beca={beca} listBecas={listBecas } key={beca.url} />
            ))}
        </div>
    );

};

export default BecasListPopulares;

