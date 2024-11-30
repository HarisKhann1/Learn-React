import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext();
export const TodoContextProvider = TodoContext.Provider
export const useTodo = () => {
    return useContext(TodoContext)
}