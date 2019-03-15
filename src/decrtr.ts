function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    let origFunc = descriptor.value;
    descriptor.value = function () {
        let origResult =  origFunc.apply(this);
        return this.info = this.name + 'iPhone = ' + '$' + this.price;
    }
    
}

class Item {
    public price: number;
    public name: string;

    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());



