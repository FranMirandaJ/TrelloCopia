import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getThemeClass } from "@/lib/themes";

export default function BoardCard({
  theme,
  title,
}: {
  theme: string;
  title: string;
}) {
  return (
    <Card className="group mx-auto w-full max-w-sm pt-0 shadow-xl hover:cursor-pointer">
      <div className={`relative p-10 ${getThemeClass(theme)}`}>
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
