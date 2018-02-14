import * as basketApi from '../packages/ClientApi/basketApi'
import * as branchManager from './branchManager'
import { BasketViewModel as InnerBasketViewModel } from '../InnerViewModels/basketViewModel'
import { BasketLineViewModel as InnerBasketLineViewModel } from '../InnerViewModels/basketLineViewModel'

export async function getBasket() {
    var outerBasketViewModel = await basketApi.getBasket()
    var branch = await branchManager.getBranch(outerBasketViewModel.branchId)

    var lines = [];
    outerBasketViewModel.lines.forEach((line) => {
        lines.push(new InnerBasketLineViewModel({
            id: line.id,
            name: line.name,
            quanity: line.quanity,
            price: line.price
        }))
    })

    var innerBasketViewModel = new InnerBasketViewModel({
        amount: outerBasketViewModel.amount,
        buyersId: outerBasketViewModel.buyersId,
        id: outerBasketViewModel.id,
        lines: lines,
        type: outerBasketViewModel.type,
        branchName: branch.name
    })

    return innerBasketViewModel
}