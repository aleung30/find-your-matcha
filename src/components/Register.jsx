import { useState } from "react"
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
                        <h2 className="text-center text-2xl font-bold tracking-tight text-white">Create an account!</h2>
                    </div>
                </form>
            </div>
       </div>
    )
}