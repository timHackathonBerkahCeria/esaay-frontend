import { X } from 'react-feather'
import Link from 'next/link'
import styles from '../styles/components/LoginPopup.module.scss'

export default function LoginPopup ({closePopup}) {
    return(
        <div className={styles.loginPopup_container}>
            <div className={styles.loginPopup_content}>
                    <button 
                     className={styles.loginPopup_close} 
                     onClick={closePopup}
                     > 
                        <X /> 
                    </button>
                <div className={styles.loginPopup_title}>
                    <h1>Login</h1>
                </div>
                <div className={styles.loginPopup_input}>
                    <input
                     placeholder="Username" 
                     type="text" 
                     name="username"
                    />
                </div>
                <div className={styles.loginPopup_input}>
                    <input 
                     placeholder="Password" 
                     type="password" 
                     name="password"
                    />
                </div>
                <button className={styles.loginPopup_btn}>Login</button>
                <span className={styles.loginPopup_prompt}>
                    <p>Don’t have an account? 
                        <Link href='/register'>
                            <a> Register</a>
                        </Link>
                    </p>
                </span>
            </div>
        </div>
    )
}