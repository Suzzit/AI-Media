import React from 'react'

const FiltersPopup = (props) => {
    const {noOfImageSpan, dropdownSelect,popUpCloseBtn} = props
    return (
        props.popupTrigger ?
            <>
                <div className='wrapper'>
                </div>
                <div className='filterspopup'
                    style={{
                        backgroundColor: "white",
                        height: "100px",
                        width: "90vw",
                        maxWidth: "242px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "10px",
                        boxShadow: "black 1px 1px 10px",
                        display:"flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: 'center',
                        textAlign: 'left'
                    }}
                >
                    {noOfImageSpan}
                    {dropdownSelect}
                    {popUpCloseBtn}
                    
                </div>
            </>
            :
            ""
    )
}

export default FiltersPopup