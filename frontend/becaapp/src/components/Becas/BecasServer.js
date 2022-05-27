const API_URL= "http://127.0.0.1:8000/beca/"

export const listBecas =  async () => {
    return await fetch(API_URL);
};

//Registro de metodos que nos permiten hacer el CRUD

export const getBeca =  async (becaId) => {
    return await fetch(`${API_URL}${becaId}${'/'}`);
};

export const getBeca1 =  async (becaUrl) => {
    return await fetch(becaUrl);
};
export const registerBeca = async (newBeca)=>{
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
            "nombre":String(newBeca.nombre).trim(),
            "categoria":String(newBeca.categoria).trim(),
            "porcentaje_financiacion":parseInt(newBeca.porcentaje_financiacion),
            "pais":String(newBeca.pais).trim(),
            "universidad":String(newBeca.universidad).trim(),
            "requerimiento":String(newBeca.requerimiento).trim(),
        })
    });



};

export const updateBeca = async (becaId, updatedBeca)=>{
    return await fetch(`${API_URL}${becaId}${'/'}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
            "nombre":String(updatedBeca.nombre).trim(),
            "categoria":String(updatedBeca.categoria).trim(),
            "porcentaje_financiacion":parseInt(updatedBeca.porcentaje_financiacion),
            "pais":String(updatedBeca.pais).trim(),
            "universidad":String(updatedBeca.universidad).trim(),
            "requerimiento":String(updatedBeca.requerimiento).trim(),
        })
    });



};

export const deleteBeca = async (becaUrl)=>{
    return await fetch( becaUrl, {
        method: 'DELETE'
        
    });


};


