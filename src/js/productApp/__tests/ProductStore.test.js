import ProductStore from "../ProductStore"

describe("Product Store", () => {

    it("Creates a new product", () =>{
        // setup
        const store = new ProductStore();

        // execute
        store.createProduct("p1", 9.99, false)
        store.createProduct("p2", 10.99, true)

        // assert
        expect(store.products.length).toBe(2)
        expect(store.products[0].name).toBe("p1")
        expect(store.products[1].name).toBe("p2")
    })

    it("Removes the correct product", () => {
        //setup
        const store = new ProductStore();
        store.createProduct("p1", 9.99, false)
        store.createProduct("p2", 10.99, true)
        store.createProduct("p3", 9.99, false)

        // execute
        store.removeProduct(store.products[1].id)

        // assert
        expect(store.products.length).toBe(2)
        expect(store.products[0].name).toBe("p1")
        expect(store.products[1].name).toBe("p3")
    })

    it("Filters products by name correctly", () => {
        // setup
        const store = new ProductStore();
        store.createProduct("p1", 9.99, false)
        store.createProduct("p2", 10.99, true)
        store.createProduct("p3", 9.99, false)

        // execute
        store.filter = "p2";

        // assert
        expect(store.filteredProducts.length).toBe(1);
        expect(store.filteredProducts[0].name).toBe("p2");
    })

    it("Leaves products unchanged when no match when removing", () => {
        //setup
        const store = new ProductStore();
        store.createProduct("p1", 9.99, false)
        store.createProduct("p2", 10.99, true)
        store.createProduct("p3", 9.99, false)

        // execute
        store.removeProduct("xxxx")

        // assert
        expect(store.products.length).toBe(3)
        expect(store.products[0].name).toBe("p1")
        expect(store.products[1].name).toBe("p2")
        expect(store.products[2].name).toBe("p3")
    })

    it("Displays On Sale products only", () => {
        //setup
        const store = new ProductStore();
        store.createProduct("p1", 9.99, false)
        store.createProduct("p2", 10.99, true)
        store.createProduct("p3", 9.99, false)

        // execute
        store.toggleOnSaleOnly()

        // assert
        expect(store.filteredProducts.length).toBe(1);
        expect(store.filteredProducts[0].name).toBe("p2");

    })


})
