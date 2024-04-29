import React, { Suspense } from 'react'
import { lazy } from 'react'
import UseLoader from '../misc/loader/UseLoader';

const PageContent=lazy(()=>import('./PageContent'))

const PageLayout = () => {
  return (
  <>
   <Suspense fallback={<UseLoader/>}>
   <PageContent/> 
   </Suspense>
  </>
  )
}

export default PageLayout
