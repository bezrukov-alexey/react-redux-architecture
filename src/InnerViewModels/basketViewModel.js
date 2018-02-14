export class BasketViewModel {
    constructor({ id, type, branchName, amount, buyersId, lines}) {
        this.id = id
        this.type = type
        this.branchName = branchName
        this.amount = amount
        this.buyersId = buyersId
        this.lines = lines
        this.error= ""
    }
}
