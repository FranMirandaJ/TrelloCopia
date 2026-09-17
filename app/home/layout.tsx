import AppShell from "./_components/app-shell";

export default function HomeLayout({ children }: LayoutProps<"/home">) {
  return <AppShell>{children}</AppShell>;
}
