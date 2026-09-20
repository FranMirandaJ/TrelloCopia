import AppShell from "../../components/app-shell";

export default function HomeLayout({ children }: LayoutProps<"/home">) {
  return <AppShell>{children}</AppShell>;
}
