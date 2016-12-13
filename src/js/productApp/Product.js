import { computed, observable } from "mobx"

export default class Product
{
    @observable id
    @observable name
    @observable price
    @observable onSale

    @computed get displayPrice(){
        let p =  this.onSale
            ? this.price * 0.9
            : this.price
        return p.toFixed(2)
    }

    constructor(name, price, onSale = false){
        this.id = Math.random()
        this.name = name
        this.price = price
        this.onSale = onSale
    }
}