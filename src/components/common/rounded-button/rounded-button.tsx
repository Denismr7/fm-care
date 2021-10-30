import React from 'react'
import { IButtonParams } from '../../../dtos/'
import styles from './rounded-button.module.scss'

export function RoundedButton({ text, type = "button", onClick }: IButtonParams) {
    return (
        <>
            <button type={type} className={styles.button} onClick={onClick}>{ text }</button>
        </>
    )
}
