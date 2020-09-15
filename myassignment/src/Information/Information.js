import React, { useState } from 'react';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';

const Information = () => {
    const [currentString, setCurrentstring] = useState(false);
    const userDetails = useSelector((state) => state.title);
    const info = useDispatch()


    const clickChangeHandler = () => {
        info({
            type: "FETCH_FLIGHT_DETAILS"
        });
        setCurrentstring(true);
    }
    const titleDescription = () => {
        return userDetails.map((title) => {
            return <p>{title}</p>

        })
    }
    return (
        <div>
            <h1>Information page</h1>
            {currentString ? titleDescription() : <p>Click now</p>}
            <Button click={clickChangeHandler} />
        </div>
    )
}
export default Information;