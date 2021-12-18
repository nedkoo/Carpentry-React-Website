async function request(url,options){
    try {
        const response = await fetch(url,options);
        if(response.ok===false){
            const error = await response.json();
            
            throw new Error(error.message)
        }
        try{
            return  await response.json();
        }catch (err){
            
            return response;
        }

    }catch (error){

        
        alert(error.message);
        
        throw error;
    }
}

function getOptions(method='get',body,token){

    const options = {
        headers:{},
        method
    };

    
    if(token!=null){
        options.headers['X-Authorization']=token;
    }

    if(body){
        options.headers['Content-type']='application/json';
        options.body=JSON.stringify(body);
    }
    return options;
}


export async function post(url,data){
    return await request(url,getOptions('post',data));
}


export async function postUser(url,data,token){
    return await request(url,getOptions('post',data,token));
}


