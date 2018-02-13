import { BranchViewModel } from '../OuterViewModel/branchViewModel'

export const getBranch = (id) => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            if(id === '13144')
                resolve(new BranchViewModel({
                    id: id, 
                    name: 'Гоголя',
                }))
            else reject('no branch');
        }
        , 1000)
    )
