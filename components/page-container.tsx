import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  titulo?: string;
  descripcion?: string;
  acciones?: ReactNode;
}

export default function PageContainer({ children, titulo }: Props) {
  return (
    <div className="w-full bg-background">
      {titulo && (
        <div className="flex flex-col mb-8 text-left border-b p-4">
          <h3 className="text-xl font-bold text-foreground tracking-wide uppercase mt-2 truncate">
            {titulo}
          </h3>
        </div>
      )}

      <div className="w-full flex flex-col gap-6 px-4">{children}</div>
    </div>
  );
}
