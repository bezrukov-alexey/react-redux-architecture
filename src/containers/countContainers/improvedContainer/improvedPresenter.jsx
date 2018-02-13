import React from 'react';
import Button from '../../../components/button';

/**
 * Разметка для ImprovedComponent. 
 */
export default ({count, multipleCount, divideCount}) => 
    <div>
        <label className={"current-value"}>{count}</label>
        <Button buttonText={"Multiple x2"} onClick={multipleCount} />
        <Button buttonText={"Divide by 2"} onClick={divideCount} />
    </div>
    