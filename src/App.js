import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
 

const Layout = lazy(() => import('./container/PageLayout'));

function App() {
  return (
    <Suspense fallback={<div> </div>}>
      <Routes>
     
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
