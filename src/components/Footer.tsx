import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
}

const Footer = ({ viewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart
        ? <div className="footer__box"><p>Shopping Cart &copy; {year}</p></div>
        : (
            <>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <div className="footer__box"><p>Shopping Cart &copy; {year}</p></div>
            </>
        )

    const content = (
        <footer className="footer">
            {pageContent}
        </footer>
    )

    return content
}
export default Footer