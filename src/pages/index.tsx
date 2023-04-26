import { useRef, useState } from 'react'

type FIIType = {
    fii: {
        code: string
        description: string
        price: number
        variation: string
        daily_liquidity: number
        last_yield: number
        dividend_yield: number
        net_worth: number
        equity_value: number
        month_profitability: number
        pvp: number
    }
}

function FII(props: FIIType) {
    return <>
        <p>code: <span>{props.fii.code}</span></p>
        <p>description: <span>{props.fii.description}</span></p>
        <p>price: <span>{props.fii.price}</span></p>
        <p>variation: <span>{props.fii.variation}</span></p>
        <p>dividend_yield: <span>{props.fii.dividend_yield}</span></p>
        <p>equity_value: <span>{props.fii.equity_value}</span></p>
        <p>last_yield: <span>{props.fii.last_yield}</span></p>
        <p>month_profitability: <span>{props.fii.month_profitability}</span></p>
        <p>net_worth: <span>{props.fii.net_worth}</span></p>
        <p>pvp: <span>{props.fii.pvp}</span></p>
    </>
}

function IndexPage() {
    async function fetchFII(code: string): Promise<FIIType> {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/fii/${code}/`,
            { mode: "cors" }
        )
        return await response.json()
    }

    const [data, setData] = useState<FIIType>()
    const ref = useRef<HTMLInputElement>(null)
    const handler = () => {
        setData(undefined)
        fetchFII(ref?.current?.value || "").then(setData)
    }

    return (<>
        <h1>Funds Explorer Scraper</h1>
        <div>
            <span>Fund Code: </span>
            <input ref={ref} type='text' />
            <button onClick={handler}>Buscar</button>
        </div>
        {data && <FII fii={data.fii} />}
    </>)
}

export default IndexPage
