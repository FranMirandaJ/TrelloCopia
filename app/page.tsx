import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import TrelloLogo from "@/components/ui/trello-logo";
import { UserCircle2 } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 bg-muted">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader className="space-y-2.5">
          <div className="flex gap-2 justify-center items-center">
            <TrelloLogo className="h-8 w-8" />
            <h1 className="font-trello text-4xl font-semibold tracking-tight">
              Trello
            </h1>
          </div>
          <span className="text-center font-bold tracking-wide">
            Inicia sesión para continuar
          </span>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">
                  Correo<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Introduce tu correo electrónico"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">
                    Contraseña<span className="text-destructive">*</span>
                  </Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full font-bold p-4">
                Continuar
              </Button>
            </div>
          </form>
        </CardContent>

        <div className="flex-col gap-2 text-center px-(--card-spacing) space-y-4">
          <Separator />
          <p className="text-center tracking-wide">O continúa como:</p>
          <Link href="/home" className="block">
            <Button
              variant="outline"
              className={"p-4 font-bold gap-2"}
            >
              <UserCircle2 data-icon="inline-start" className="size-6" />Invitado
            </Button>
          </Link>
          <Separator />
          <p className="text-xs">
            Esto es un clon de Trello hecho como proyecto personal para mi
            portafolio, <strong>no</strong> es para uso comercial.
          </p>
        </div>
      </Card>
    </div>
  );
}
