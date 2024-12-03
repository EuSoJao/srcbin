import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createLazyFileRoute('/stock/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
      <div className="">
        <Button>Teste</Button>
        <table>cu</table>
      </div>
    </>
  )
}
