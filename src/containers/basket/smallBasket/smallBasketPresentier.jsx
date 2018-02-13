import React from 'react';

/**
 * Разметка для SimpleComponent
 */
export default ({amount, onClick}) =>
    <div className={"basket"} onClick={onClick}>
        <label>Стоимость покупок: {amount}</label>
    </div>
