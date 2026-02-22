import { Header } from './header';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full mx-auto">{children}</main>
        </div>
    );
};