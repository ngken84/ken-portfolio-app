import React from 'react';

const CssBlockTitle = ({item, items, level}) => {

    return (
        <>
            { item && 
                <>
                    { item.red && 
                        <span className="modulepage--redtext">{item.red}</span>
                    }
                    <span className="modulepage--csscode-header">{item.label}</span>{' '}
                    
                </>
            }

            {!item && items && items.length > 0 && 
                items.map((item) => (
                    <>
                        { item.red && 
                            <span className="modulepage--redtext">{item.red}</span>
                        }
                        <span className="modulepage--csscode-header">{item.label}</span>
                        { item.add && ' +'}
                        { item.comma && 
                            <>,<br/></>
                        }
                        {' '}
                    </>
                ))
            }
            <span className={`modulepage--csscode-bracket--${level}`}>{'{'}</span>
        </>
    );
}

export default CssBlockTitle;