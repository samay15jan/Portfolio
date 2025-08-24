import CustomCursor from '@/components/CustomCursor';
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <SmoothScrollProvider>
        <body>
          <CustomCursor />
          {children}
        </body>
      </SmoothScrollProvider>
    </html>
  )
}