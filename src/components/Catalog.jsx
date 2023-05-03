import React, { useEffect, useRef, useState } from "react";

const Catalog = () => {

    const [max, setMax] = useState(10000)
    const [min, setMin] = useState(0)
    const [left, setLeft] = useState(null)
    const [right, setRight] = useState(null)
    const [maxHeight, setMaxHeight] = useState(false)

    const content = useRef(null)
    const progress = useRef(null)

    let gap = 500;

    useEffect(e => {
        if (max - min < gap) {
            setMax(min + 500)
        } else {
            setLeft((min / 10000) * 100 + "%");
            setRight(100 - (max / 10000) * 100 + "%");
        }
    }, [max, min])

    return (

        <div className="features">

            <button className="collapsible" onClick={() => setMaxHeight(!maxHeight)}>
                <div className="collapsible-title">Price</div>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="data" ref={content} style={maxHeight ? { maxHeight: content.current.scrollHeight + 'px' } : { maxHeight: null }}>

                <div className="range">
                    <input contentEditable="true" type="number" className="range__text-min"
                        value={min} onChange={e => setMin(e.target.value)} />
                    <input contentEditable="true" type="number" className="range__text-max"
                        value={max} onChange={e => setMax(e.target.value)} />
                </div>

                <div className="range__input">

                    <div className="range__slider">
                        <div
                            className="range__progress"
                            ref={progress}
                            style={{ left: left, right: right }}
                        >

                        </div>
                    </div>

                    <input type="range" className="range__min" value={min} max="10000"
                        min="0" step="5" onChange={e => setMin(e.target.value)} />
                    <input type="range" className="range__max" value={max} max="10000"
                        min="0" step="5" onChange={e => setMax(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Catalog;