// Example, simplified, from what Sez did in 15 min coding interview to S---fy on Jul 6, 2022
const PRODUCTS = ["Drill, 90, 45", "Saw, 50, 60", "Hammer, 90, 20"];
// Parsing lines into fields
function formatProducts(products) {
    return products.map(product => {
        const [title, popularity, price] = product.split(',');
        return {
            title,
            popularity,
            price
        }
    })
                        }
const formattedProducts = formatProducts(PRODUCTS);
						