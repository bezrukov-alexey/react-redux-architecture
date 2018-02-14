import { getBranch as api} from '../packages/ClientApi/branchApi'
import { BranchViewModel as InnerBranchViewModel} from '../InnerViewModels/branchViewModel'

export async function getBranch(id)
{
    var outerBranchViewModel =  await api(id)

    return new InnerBranchViewModel({
        id: outerBranchViewModel.id,
        name: outerBranchViewModel.name
    })
}