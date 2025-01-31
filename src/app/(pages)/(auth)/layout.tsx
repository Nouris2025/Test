import type { Metadata } from "next";

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex-grow bg-black text-slate-50">{children}</div>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Sign in | Nouris El Bahr`,
    description: `Sign in to Nouris El Bahr`,
  };
}
