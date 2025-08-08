import Navbar from "@/components/navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="w-full">
          <Navbar />
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
