// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
// importing the component from the library
import { Resume } from '@resume/viewer';
import { JsonEditor } from '@resume/editor';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome resume-workspace</h1>}></Route>
      <Route path="/viewer" element={<Resume />}></Route>
      <Route path="/editor" element={<JsonEditor />}></Route>
    </Routes>
  );
}

export default App;
