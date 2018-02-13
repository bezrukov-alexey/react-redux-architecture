
export const  GetBasket = () => 
    new Promise(resolve => {
        setTimeout(() => 
            resolve({
                id: '12345'
            })
        , 2000);
    });
