import { useState } from "react"
import { Link } from "react-router-dom"

export const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password, 
            options: {
                data: {
                    display_name: username
                }
            }
        });

        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            setMessage("User account created!")
        }

        setEmail("");
        setPassword("");
        setUsername("");
    };

    return (
       <div className="flex min-h-screen items-center justify-center bg-gray-200 px-6 py-12">
            <br />
            {message && <>{message}</>}
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-gray-800 p-8 shadow-lg">
                <form className="temp" onSubmit={handleSubmit}>
                    <div>
                        <h2 className="text-center mb-4 text-2xl font-bold tracking-tight text-white">Create an account!</h2>
                    </div>
                    {/* container for input fields */}
                    <div className="space-x-3">

                        <input className="w-full mb-2 rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email" required>
                        </input>

                        <input className="w-full mb-2 rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="username"
                        placeholder="Username" required>
                        </input>

                        <input className="w-full mb-2 rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password" required>
                        </input>

                        <button className="w-full mb-4 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-red-200"
                        type="submit">Create Account</button>
                        <p className="text-center text-sm text-gray-400">Already have an account? <Link className="text-white hover:text-gray-300" to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
       </div>
    )
}