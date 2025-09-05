import supabase from "../helper/supabaseClient";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email, 
            password: password,
        });

        if (error) {
            setMessage(error.message);
            setEmail("");
            setPassword("");
            return;
        }

        if (data) {
            navigate("/dashboard");
            return null;
        }
        
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <h2 className={styles.title}>Login</h2>
                <br></br>
                <p>{message && <>{message}</>}</p>
                <form onSubmit={handleSubmit}>
                <input
                className={styles.searchbar}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" placeholder="Email" required/>

                <br></br>
                <br></br>
                <input 
                className={styles.searchbar}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password" placeholder="Password" required/>
            
                <br></br>
                <br></br>

                <button className={styles.button} type="submit">Login</button>
                </form>
                <br></br>
                <br></br>
                <p>Don't have an account? <Link className={styles.link} to='/register'>Register</Link></p>
            </div>
        </div>

        
    )
}