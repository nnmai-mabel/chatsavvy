import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'

const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    useEffect(() => {
        if(authUser){

            // Local deployment
            // const socket = io("http://localhost:5001", {
            //     query:{
            //         userId: authUser._id
            //     }
            // })

            // After deployed to render
            const socket = io("https://chatsavvy.onrender.com/", {
                query:{
                    userId: authUser._id
                }
            })

            setSocket(socket)

            // socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            // Clean up function
            return () => socket.close()
        } else{
            if(socket){
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])
    return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>
    
}