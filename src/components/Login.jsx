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
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-6 py-12">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-gray-800 p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          Welcome back!
        </h2>

        {message && (
          <p className="text-center text-red-400 font-medium">{message}</p>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
          />

          <input
            className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />

          <button
            className="w-full rounded-lg bg-gray-500 px-4 py-2 font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-red-200"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link className="text-white hover:text-gray-300" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
