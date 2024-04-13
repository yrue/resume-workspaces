import styles from './json-editor.module.scss';

/* eslint-disable-next-line */
export interface JsonEditorProps {}

export function JsonEditor(props: JsonEditorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to JsonEditor!</h1>
    </div>
  );
}

export default JsonEditor;
