import type { ReactNode } from "react";
import PublicNavbar from "../components/navbar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicNavbar />
      {children}
    </>
  );
}
