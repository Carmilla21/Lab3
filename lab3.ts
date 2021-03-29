interface Product {
    
    name: string;
    price: number;
}

let products: Product[] = [{

    name: "Water Bottle",
    price: 30.00,
}, 
{
    name: "Ashwagandha",
    price: 12.00,
}, {

    name: "Samsung S9",
    price: 300.00,
},

];

function calcAverageProductPrice(products: Product[]) {
        let total = 0;
        for (let product of products) {
             total += product.price
            }
            return total / products.length;
        }
        console.log(calcAverageProductPrice(products));

        interface InventoryItem extends Product{
            quantity: number;
        }

        const inventory: InventoryItem[] = [
            {
                name: 'motor',
                price: 10.00,
                quantity: 10
        },

        {
                name: 'sensor',
                price: 12.50,
                quantity: 4
        },

        {

                name: 'LED',
                price: 1.00,
                quantity:20

        },
        
    ]

    function calcInventoryValue(inventory: InventoryItem[]) {
        let total = 0;
        for (let item of inventory) {
            total += item.quantity * item.price;
        }
        return total;
    }

    console.log(calcInventoryValue(inventory));