import { error } from "console"
import { useState } from "react"
import supabase from "../../helper/supabaseClient";


export const Review = () => {

    const [username, setUsername] = useState(null)

    useEffect (() => {
        async function getUserInfo() {
            const { data: { user } } = await supabase.auth.getUser()  

            if (error) {
                alert("Please try again")
            }

            setUsename(user)
        }
    }, [])

    return (
        <div>
            {!username &&
                <p>Please Log in</p>
                
            }
        </div>
    )
}