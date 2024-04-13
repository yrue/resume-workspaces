// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
// importing the component from the library
import { ExampleComp } from '@resume/viewer';
import { JsonEditor } from '@resume/editor';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title={'Test'} />}></Route>
      <Route path="/exampleComp" element={<ExampleComp />}></Route>
      <Route path="/editor" element={<JsonEditor />}></Route>
    </Routes>
  );
}

export default App;
