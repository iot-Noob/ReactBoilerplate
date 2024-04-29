import React from 'react'
import { lazy,Suspense } from 'react'
import { basicroute } from '../routes/mainroute'
import UseLoader from '../misc/loader/UseLoader'
import { Routes,Route } from 'react-router-dom'
const PageContent = () => {
  return (
   <>
   <Suspense fallback={<UseLoader isload={true}/>} >
    <Routes>
      {
        basicroute.map((val,index)=>{
          <Route key={index} path={val.path} element={<val.component/>}/>
        })
      }
    </Routes>
   </Suspense>
   </>
  )
}

export default PageContent
