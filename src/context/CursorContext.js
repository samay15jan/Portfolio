"use client"
import React from "react";

export const CursorContext = React.createContext(null);

export const useCursor = () => React.useContext(CursorContext);
