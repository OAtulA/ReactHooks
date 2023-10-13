import { useMemo, useState } from "react"
import { initialItems } from './utils'
import './useMemo_page.css'

function UseMemo_page() {
    const [count, setCOunt] = useState(0);
    const [items] = useState(initialItems)
    const increment = () => {
        setCOunt(prevCount => prevCount + 1);
    }
        const decrement = () => {
        setCOunt(prevCount => prevCount - 1);
    }

    let selectedItem = 0
    // TO see the slow computation.
    // While we see that here the 
    // selectedItem = items.find((item)=> item.isSelected);

    // Now lets try its memoized version that uses caching.
    // Since we need to do do this only when the items update.
    selectedItem = useMemo(() => { 
        return items.find((item) => item.isSelected); 
    }, [items])



    // selectedItem = items.find((item)=> item.id === count);
    return (
        <div className="useMemoPage">
            <h1>Count: {count}</h1> <br />
            <div className="selected">Selected Item: {selectedItem.id}</div>
            <button className="incr" onClick={increment}>+</button>
            <button className="decr" onClick={decrement}>-</button>
        </div>
    )
}

export default UseMemo_page