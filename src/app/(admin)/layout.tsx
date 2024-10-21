import Navbar from "@/components/Navbar";
import FormDataContextProvider from "@/contexts/FormDataContext";

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FormDataContextProvider>
      <main>
          <Navbar />
          {children}
      </main>
    </FormDataContextProvider>
  )
}
