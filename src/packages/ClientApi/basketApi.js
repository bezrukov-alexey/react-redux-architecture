import { BasketViewModel } from '../OuterViewModel/basketViewModel'

export const getBasket = () => 
    new Promise(resolve => 
        setTimeout(() => {
            resolve(new BasketViewModel({
                id: '2324', 
                branchId: '13144',
                amount: '2345',
                buyersId: '1',
                type: '10130',
                lines: ['line1', 'line2']
            }))
        }
        , 2000)
    )
