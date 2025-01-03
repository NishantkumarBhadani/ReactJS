import React from "react";
import UserContext from "./Context";

const UsercontextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UsercontextProvider