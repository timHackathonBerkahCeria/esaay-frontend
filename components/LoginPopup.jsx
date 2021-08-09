import styles from '../styles/components/LoginPopup.module.scss'

export default function LoginPopup () {
    return(
        <div className={styles.loginPopup_container}>
            <div className={styles.loginPopup_content}>
                <div className={styles.loginPopup_title}>
                    <h1>Login</h1>
                </div>
            </div>
        </div>
    )
}