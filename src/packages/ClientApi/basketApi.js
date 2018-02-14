import { BasketViewModel } from '../OuterViewModel/basketViewModel'
import { BasketLineViewModel } from '../OuterViewModel/basketLineViewModel'

export const getBasket = () => 
    new Promise(resolve => 
        setTimeout(() => {
            resolve(new BasketViewModel({
                id: '2324', 
                branchId: '13144',
                amount: '2345',
                buyersId: '1',
                type: '10130',
                lines: [
                    new BasketLineViewModel({id:'1', name:'Наушники', price:'500', quanity: '1'}),
                    new BasketLineViewModel({id:'2', name:'Монитор', price:'1000', quanity: '1'}),
                    new BasketLineViewModel({id:'3', name:'Системный блок', price:'15000', quanity: '1'})
                ]
            }))
        }
        , 500)
    )
