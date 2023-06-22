import React from "react"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({ viewCart, setViewCart }: PropsType) {

    const content = (
        <header className="header">
            <div className="header__title-bar">
                <h1>Acme.co</h1>
            </div>
            <div className="header__price-box"></div>
        </header>
    )
    return (
        <div>Header</div>
    )
}