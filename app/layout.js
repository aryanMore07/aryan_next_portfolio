import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { theme } from "@/utils/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <body>
        <ThemeProvider theme={theme}>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
