import logo from '../assets/logo-in-orbit.svg'
import lestStart from '../assets/let-start-ilustration.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={lestStart} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você aind não cadastrou nenhuma meta, que tal cadastrar?
      </p>

      {/* <button type='button' className='px-4 py-2.5 rouded-lg bg-violet-500 text-violet-50 flex itens-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600 '>
    <Plus className='size-4'/>
    Cadastrar Meta
  </button> */}

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar Meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
