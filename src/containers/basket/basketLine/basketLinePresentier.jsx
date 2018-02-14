import React from 'react';

/**
 * Разметка для линии в корзине
 */
export default ({line, onChangeQuanity, quanity}) =>
    <div key={line.id} style={{ padding: 10 }}>
        {line.name} - {line.price} -  <input type="text" min="1" max="10" value={line.quanity} step="1" onChange={onChangeQuanity} />
    </div>
