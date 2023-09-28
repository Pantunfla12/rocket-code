import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/user.schema";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  return (
    <UserContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        isOpen,
        setIsOpen,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
