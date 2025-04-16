import { SidebarProvider } from "@/components/ui/sidebar";
import { ClientSidebar } from "@/components/ClientSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ClientSidebar />
      <main className="flex flex-col flex-1">{children}</main>
    </SidebarProvider>
  );
}
