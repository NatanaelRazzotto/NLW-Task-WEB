import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { useEffect, useState } from 'react'
type SummaryResponse = {
  completed: number;
  total: number;
  goalsPeerDay: Record<string, {
      id: string;
      title: string;
      completedAt: string;
  }[]>;
}

export function App() {

  const [summary, setSummary] = useState<SummaryResponse | null>(null)

  useEffect(() => {
    fetch('http://localhost:3333/summary')
    .then(response => {
      return response.json()
    })
    .then(data => {
      //console.log(data)
      setSummary(data.summary)
    })
  },[] )

  console.log(summary)

  return (
    <Dialog>

      {summary && summary.total > 0 ? <Summary /> : <EmptyGoals />}

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
