import SideNav from "@/app/ui/components/sidenav";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div style={{ display: 'flex' }}>
            <SideNav />
            <br />
            {children}
        </div>
    );
}
