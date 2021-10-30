import React, { ChangeEvent } from 'react'
import { IInputParams } from '../../../dtos/'
import styles from './material-input.module.scss'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'


export function MaterialInput({ type, label, onChange, icon }: IInputParams) {

    function handleOnChange(v: ChangeEvent<HTMLInputElement>) {
        const value = v.currentTarget.value;
        onChange(value);
    }

    function renderLabel(label?:string): JSX.Element | undefined {
        return label ? <label className={styles.label} htmlFor={label}>{ label }</label> : undefined;
    }

    return (
        <div className={styles.container}>
            { renderLabel(label) }
            <div className={styles.marginTop}>
                <TextField className={styles.materialInput} type={type} id={label} variant="outlined" onChange={handleOnChange}
                    InputProps={{
                        startAdornment: icon ?  (
                          <InputAdornment position="start">
                            {icon}
                          </InputAdornment>
                        ) : null,
                      }}
                />
            </div>
        </div>
    )
}
