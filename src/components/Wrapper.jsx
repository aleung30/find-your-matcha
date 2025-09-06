import supabase from "../helper/supabaseClient";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Wrapper({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };

    checkSession();

    // subscribe to session changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthenticated(!!session);
    });

    // clean up 
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return authenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default Wrapper;
