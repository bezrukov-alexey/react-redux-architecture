import * as basketApi from '../packages/ClientApi/basketApi'
import * as branchManager from './branchManager'
import { BasketViewModel as InnerBasketViewModel } from '../InnerViewModels/basketViewModel'

export async function getBasket()
{
    var outerBasketViewModel = await basketApi.getBasket();
    var branch = await branchManager.getBranch(outerBasketViewModel.branchId)

    var innerBasketViewModel = new InnerBasketViewModel({
        amount: outerBasketViewModel.amount,
        buyersId: outerBasketViewModel.buyersId,
        id: outerBasketViewModel.id,
        lines: outerBasketViewModel.lines,
        type: outerBasketViewModel.type,
        branchName: branch.name
    })

    return innerBasketViewModel
}