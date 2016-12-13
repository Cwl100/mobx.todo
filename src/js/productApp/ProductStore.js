import { computed, observable } from "mobx"
import Product from "./Product"

export default class ProductStore
{
    @observable products = [];
    @observable filter = "";
    @observable onSaleOnly = false;

    @computed get filteredProducts(){
        var matchesFilter = new RegExp(this.filter, "i")
        return this.products.filter(product =>
            (!this.filter || matchesFilter.test(product.name))
            && (!this.onSaleOnly || product.onSale == true))
    }

    createProduct(name, price, onSale = false){
        this.products.push(new Product(name, price, onSale))
    }

    removeProduct(id){
        var index = this.products.findIndex(x => x.id == id)
        if(index > -1){
            this.products.splice(index, 1)
        }
    }

    toggleOnSaleOnly(){
        this.onSaleOnly = !this.onSaleOnly
    }
}
