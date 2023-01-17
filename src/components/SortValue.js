import React from 'react'

const SortValue = ({value, setValue, editable, squared, color}) => {
    return (
        <div 
            className={squared ? "sort-value-square__container": "sort-value__container"} 
            style={{
                left: value.left, 
                top: value.top ? value.top: '0rem', 
                backgroundColor: color ? color : value.complete ? 'red' : 'white'
            }}>
            {!editable &&
                <div>{value.value}</div>
            }
            {editable && 
                <input 
                    className="sort-value__input"
                    type="text"
                    value={value.value}
                    onChange={(e)=>setValue(value.key, e.target.value)}/>
            }
        </div>
    )
}

export default SortValue;