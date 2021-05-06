import React from 'react'
import { useHistory, useParams } from 'react-router'

export default function DetailedTaskComp({data}) {
console.log(data)
const {text}=useParams()
console.log(text)

let searchTask = data.find(item=>item.text===text)
console.log(searchTask)
    return (
        <div>
            <h1>Task : {searchTask && searchTask.text}</h1>
            <p>Status :{searchTask && searchTask.done.toString()}</p>
        </div>
    )
}
