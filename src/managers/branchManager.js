import { getBranch as api} from '../packages/ClientApi/branchApi'

export async function getBranch(id)
{
    return await api(id)
}