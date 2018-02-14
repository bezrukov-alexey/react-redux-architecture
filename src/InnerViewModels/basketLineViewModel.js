export class BasketLineViewModel {
    constructor({ id, name, price, quanity }) {
        this.id = id
        this.name = name
        this.price = price
        this.quanity = quanity
        this.error = ""
    }
}
