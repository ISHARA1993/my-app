import SideNav from "@/app/ui/components/sidenav";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en"><SideNav />
            {children}
        </html>
    );
}
