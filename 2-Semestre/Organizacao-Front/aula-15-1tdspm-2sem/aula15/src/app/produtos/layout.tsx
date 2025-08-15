import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRODUTOS",
  description: "Criado por Rei Luizinho",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <div>  
      <p>MAIS PRODUTOS</p>
      {children}
      <p>MAIS PRODUTOS</p>
    </div>
    
  );
}
