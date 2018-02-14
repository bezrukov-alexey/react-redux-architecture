export class BasketViewModel {
    constructor({ id, type, branchId, amount, buyersId, lines }) {
        this.id = id
        this.type = type
        this.branchId = branchId;
        this.amount = amount;
        this.buyersId = buyersId;
        this.lines = lines;
    }
}
