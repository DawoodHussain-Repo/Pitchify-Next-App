import { Toaster } from '@/components/ui/toaster';
import Navbar from '../../components/navbar'
export default function Layout({ children }:Readonly<{children : React.ReactNode}>) {
  return (
    <main className=" antialiased">
      <Navbar />
      {children}
      <Toaster />
    </main>
  );
}