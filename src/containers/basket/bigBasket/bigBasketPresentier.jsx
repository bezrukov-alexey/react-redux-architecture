import React from 'react';
import BasketLineComponent from '../basketLine/basketLineContainer'

/**
 * Разметка для BigBasketComponent
 */
export default ({amount, branchName, type, lines = [], error}) =>
    <div>
        { error && <label>{error}</label> }
        <label>Стоимость покупок: {amount}</label> <br/>
        <label>Тип: {type}</label> <br/>
        <label>Филиал: {branchName}</label> <br/>
        <label>Товары в корзине:</label>
        {
            lines.map((line, index) => 
                <BasketLineComponent key={index} line={line} />
            )
        }
    </div>
