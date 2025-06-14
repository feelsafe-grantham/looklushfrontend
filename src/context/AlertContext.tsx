"use client";
import React, { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import ShowAlert from "@/components/common/Alert";
import { AlertType } from "@/lib/types";
interface AlertContextType {
  showAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);


interface AlertProviderProps {
  children: ReactNode;
}


export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<{
    message: string;
    type: AlertType;
  } | null>(null);

  const showAlert = (message: string, type: AlertType = "success") => {
    setAlert({ message, type });
  };

  return (

    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <ShowAlert
          message={alert.message}
          state={alert.type}
          setHandler={setAlert}
        />
      )}
    </AlertContext.Provider>
  );
};
