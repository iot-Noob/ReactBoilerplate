import { lazy } from "react"
const Meltdown=lazy(()=>import('../page/DoomMeltdown'))
const basicroute=[
   {
    path:"/meltdown",
    component:Meltdown
   } 
]

export {basicroute}