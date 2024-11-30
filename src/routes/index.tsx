import { Button } from "@/components/ui/button"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})



function RouteComponent() {
  const buttons = ["Clientes", "Estoque", "Dívidas", "Editar", "Cadastrar"]

  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-zinc-700 justify-center items-center">
        <h1 className="m-8 text-zinc-100 uppercase text-shadow text-shadow-x-md text-shadow-y-md text-shadow-blur-8 text-shadow-zinc-50">Controle de estoque</h1>
        <div className="flex flex-col gap-2">
          {buttons.map(button => (
            <Button key={button} className="w-48 h-16">{button}</Button>
          ))}
        </div>
      </div>
    </>
  )
}
