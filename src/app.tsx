import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'


export function App() {

  // const [summary, setSummary] = useState< | null>(null)

  // useEffect(() => {
  //   fetch('http://localhost:3333/summary')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(data => {
  //     //console.log(data)
  //     setSummary(data.summary)
  //   })
  // },[] )

  // console.log(summary)

  const {data } = useQuery({
    queryKey : ['summary'],
    queryFn : getSummary,
    staleTime : 1000 * 60 //60 seconds
  })

  // const {data } = useQuery<SummaryResponse>({
  //   queryKey : ['summary'],
  //   queryFn : async () => {
  //    const response = await fetch('http://localhost:3333/summary')
  //    const data = await response.json()
     
  //    return data.sumary
  //   }
  // })

  return (
    <Dialog>

      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      {/* <EmptyGoals /> */}

      {/* <pre> 
        {
          JSON.stringify(summary, null, 2)
        }
      </pre> */}
       {/* <Summary />  */}

      <CreateGoal />
    </Dialog>
  )
}
