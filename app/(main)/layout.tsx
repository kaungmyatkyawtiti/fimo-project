// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
//
// export default function HomeLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex flex-col min-h-dvh">
//       <Header />
//       <main className="flex-1">
//         {children}
//       </main>
//       <Footer />
//     </div>
//   )
// }
//
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1">
        <Header />
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  )
}
