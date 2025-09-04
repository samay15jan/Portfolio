"use client"
import CustomCursor from '@/components/CustomCursor';
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import React from 'react';
import { CursorContext } from '@/context/CursorContext';

export default function RootLayout({ children }) {
  const [cursorColor, setCursorColor] = React.useState("");

  return (
    <html lang="en">
      <SmoothScrollProvider>
        <body>
          <CursorContext.Provider value={{ cursorColor, setCursorColor }}>
            <CustomCursor color={cursorColor} />
            {children}
          </CursorContext.Provider>
        </body>
      </SmoothScrollProvider>
    </html>
  )
}
