import { useEffect, useState } from "react";
import * as BecasServer from './BecasServer';
import { useNavigate, useParams } from 'react-router-dom';
import imagen2 from '../Imagenes/imagen2.jpg';
import imagen1 from '../Imagenes/imagen1.jpg';

const BecasForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)

    const initialState={nombre:"",categoria:"",porcentaje_financiacion:100,pais:"",universidad:"",requerimiento:""};
    const [beca, setBecasp] = useState(initialState);

    const handleInputChange=(e)=>{
        setBecasp({...beca,[e.target.name]:e.target.value});
    };

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            let res;
            if (!params.id){
                res=await BecasServer.registerBeca(beca);
                const data=await res.json();
                if (data.message==="Success"){
                setBecasp(initialState);
            }

            }else{
                await BecasServer.updateBeca(params.id,beca);
            }
            
            navigate('/');

        }catch(error){
            console.log(error)
        }


        console.log(beca);
    };

    const getBeca = async (becaId) => {
        try {
            const res=await BecasServer.getBeca(becaId)
            const data=await res.json();
            console.log(data)
            const {nombre,categoria,porcentaje_financiacion,pais,universidad,requerimiento}=data;
            setBecasp({nombre,categoria,porcentaje_financiacion,pais,universidad,requerimiento});
          
        } catch (error) {
            console.log(error)
        }

    }

    
    useEffect(()=>{
        if (params.id){
            getBeca(params.id);
        }
        // eslint-disable-next-line

    },[]);

    return (
        <div className="col-md-8 mx-auto">
            <h2 className="mb-3 text-center">INFORMACIÓN DE BECA</h2>
            <div className="card text-center">
                {
                    params.id?(
                        <img src={imagen2} alt="" />
                    ):(
                        <img src={imagen1} alt="" />
                                    )
                }
                
                <div className="card card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text"  onChange={handleInputChange} value= {beca.nombre} className="form-control" id="idNombre" name="nombre" minLength="2" maxLength="100" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoría</label>
                            <select className="form-select" required onChange={handleInputChange} value= {beca.categoria}  name="categoria" id="idCategoria" minLength="2" >
                                    <option value="">Seleccione una categoría</option>
                                    <option value="Nacional">Nacional</option>
                                    <option value="Internacional">Internacional</option>
                                </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Porcentaje de financiación</label>
                            <input type="number" onChange={handleInputChange} value= {beca.porcentaje_financiacion} className="form-control" name="porcentaje_financiacion" id="idPorcentaje" min="1" max="100" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">País</label>
                            <input type="text"  onChange={handleInputChange} value= {beca.pais} className="form-control" name="pais" id="idPais" minLength="2" maxLength="100" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Universidad</label>
                            <input type="text"  onChange={handleInputChange} value= {beca.universidad} className="form-control" name="universidad" id="idUniversidad" minLength="2" maxLength="100" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Requerimientos</label>
                            <textarea  onChange={handleInputChange} value= {beca.requerimiento} className="form-control" name="requerimiento" id="idRequerimeintos" rows="6" minLength="2" maxLength="600" required></textarea>
                        </div>
                        <div className="d-grid gap-2"> 
                            {
                                params.id?(
                                    <button type="submit" className="btn btn-block btn-primary">Actualizar</button>

                                ):(
                                    <button type="submit" className="btn btn-block btn-success">Registrar</button>
                                )
                            }
                        
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
};

export default BecasForm;