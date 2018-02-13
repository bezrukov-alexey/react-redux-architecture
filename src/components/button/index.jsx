import React from 'react'

/**
 * Простой (тупой) компонент для кнопки
 */
export default ({onClick, buttonText}) => 
    <button onClick={onClick}> {buttonText}</button>
