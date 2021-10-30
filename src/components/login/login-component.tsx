import React, { useState } from 'react'
import styles from './login-component.module.scss'
import loginImg from '../../assets/img/login.jpg'
import { MaterialInput, RoundedButton } from '..'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock';

export function LoginComponent() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    function handleInputChange(field: string, value?: string) {
        console.log(`Hi! Im field ${field} with value ${value}`);
    }

    function handleActionClick() {
        console.log('Click!');
    }

    return (
        <div className="full-screen center-children">
            <div className={styles.pane}>
                <h1 className={styles.header}>
                    {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
                </h1>
                <MaterialInput type="text" label="Email" icon={<AccountCircleIcon />} onChange={(value) => handleInputChange('email', value)} />
                <MaterialInput type="password" label="Contraseña" icon={<LockIcon />} onChange={(value) => handleInputChange('password', value)} />
                <div className={styles.actionButtonContainer}>
                    <RoundedButton text={isLogin ? "Iniciar sesión" : "Crear cuenta"} onClick={handleActionClick} />
                </div>
            </div>
            <img className={`${styles.loginImg} hidden-sm`} src={loginImg} alt="login" />
        </div>
    )
}
