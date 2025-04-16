import { SidebarProvider } from "@/components/ui/sidebar";
import { DealerSidebar } from "@/components/DealerSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DealerSidebar />
      <main className="flex flex-col flex-1">{children}</main>
    </SidebarProvider>
  );
}
