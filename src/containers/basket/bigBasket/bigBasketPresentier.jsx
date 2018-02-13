import React from 'react';

/**
 * Разметка для SimpleComponent
 */
export default ({amount, branchName, type, lines = []}) =>
    <div>
        <label>Стоимость покупок: {amount}</label> <br/>
        <label>Тип: {type}</label> <br/>
        <label>Филиал: {branchName}</label> <br/>

        {lines.map(value => <div>Line</div>)}
    </div>
