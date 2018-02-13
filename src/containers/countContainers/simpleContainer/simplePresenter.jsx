import React from 'react';
import Button from '../../../components/button';

/**
 * Разметка для SimpleComponent
 */
export default ({count, addCount, subtractCount}) =>
    <div>
        <label>{count}</label>
        <Button buttonText={"Add"} onClick={addCount} />
        <Button buttonText={"Subtract"} onClick={subtractCount} />
    </div>
