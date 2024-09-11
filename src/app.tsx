
import logo from './assets/logo-in-orbit.svg'
import lestStart from './assets/let-start-ilustration.svg'
import { Plus, Radio, X }  from 'lucide-react'
import { Button } from './components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from './components/ui/radio-group'
export function App() {

  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit"/>
      <img src={lestStart} alt="in.orbit"/>
      <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>Você aind não cadastrou nenhuma meta, que tal cadastrar?</p>
    
      {/* <button type='button' className='px-4 py-2.5 rouded-lg bg-violet-500 text-violet-50 flex itens-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600 '>
        <Plus className='size-4'/>
        Cadastrar Meta
      </button> */}

      <DialogTrigger asChild>
        <Button >
          <Plus className='size-4'/>
          Cadastrar Meta
        </Button>
      </DialogTrigger>
      </div>

        <DialogContent>
          <div className='flex flex-col gap6 h-full'>
            <div className='flex flex-col gap-3 '>
              <div className='flex itens-center justify-between'>
                <DialogTitle>Cadastrar Meta</DialogTitle>
                <DialogClose>
                  <X className="size-5 text-zinc-600"/>
                </DialogClose>  
              </div> 
              <DialogDescription>
                Adicione atividades que te fazem bem!
              </DialogDescription>
            </div>
            
                <form className='flex-1 flex flex-col justify-between '>
                  <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                      
                      <Label htmlFor='title'>Qual a atividade?</Label>
                      <Input id='title' autoFocus placeholder='Praticar exercicios'/> 
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Label htmlFor='title'>Quantas vezes na semana?</Label>
                      <RadioGroup>
                        <RadioGroupItem value="1">
                          <RadioGroupIndicator/>
                          <span className='text-zinc-300 text-sm font-medium leading-none'> 1 vez na semana</span>
                         
                          <span className='text-lg leading-none'>
                          🥱
                          </span>
                        </RadioGroupItem>
                        <RadioGroupItem value="2">
                          <RadioGroupIndicator/>
                          <span className='text-zinc-300 text-sm font-medium leading-none'> 2 vez na semana</span>
                    
                          <span className='text-lg leading-none'>
                          🥱
                          </span>
                        </RadioGroupItem>
                        <RadioGroupItem value="3">
                          <RadioGroupIndicator/>
                          <span className='text-zinc-300 text-sm font-medium leading-none'> 3 vez na semana</span>
                          <span className='text-lg leading-none'>
                          🥱
                          </span>
                        </RadioGroupItem>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <DialogClose asChild>
                      <Button type='button' className='flex-1' variant='secondary'>Fechar</Button>  
                    </DialogClose>
                
                    <Button className='flex-1' variant='secondary'>Salvar</Button>  
                  </div>  
                </form>  
              </div>          
        </DialogContent>
    </Dialog>
  )
}


