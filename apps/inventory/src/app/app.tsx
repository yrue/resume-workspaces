// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ExampleComp } from '@resume/viewer';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/exampleComp" element={<ExampleComp />}></Route>
      <Route path="/*" element={<h1 >Welcome Inventory!</h1>}></Route>
    </Routes>
  );
}

export default App;
