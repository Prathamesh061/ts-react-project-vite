import { ReactElement, createContext, useEffect, useState } from "react"

// Types
export type ProductType = {
    sku: string,
    name: string,
    price: number,
}
export type UseProductsContextType = { products: ProductType[] };
export type ChildrenType = { children?: ReactElement | ReactElement[] };


// Main Context code
const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

export function ProductProvider({ children }: ChildrenType): ReactElement {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async function fetchProducts(): Promise<ProductType[]> {
            const data = await fetch('http://localhost:3500/').then((res) => res.json()).catch((err) => {
                if (err instanceof Error) console.log(err.message);
            })
            return data;
        }

        fetchProducts().then((products) => setProducts(products));
    }, [])
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;


// ?? Initial context value
const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]
