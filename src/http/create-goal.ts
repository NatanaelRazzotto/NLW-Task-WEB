interface CreateGoalRequest{
    title : string,
    desiredWeekFrequency : number
}

export async function createGoal({title,desiredWeekFrequency} : CreateGoalRequest){
    await fetch ('http://localhost:3333/goals', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            title,
            desiredWeekFrequency
        })
    })

}