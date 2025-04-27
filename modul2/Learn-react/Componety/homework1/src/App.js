import { useState } from 'react';
import styles from './app.module.css';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение');
    console.log(promptValue);

    if (!promptValue || promptValue.length < 3) {
      setError('Введенное значение должно содержать минимум 3 символа');
    } else {
      setValue(promptValue);
      setError('');
    }
  };

  const onAddButtonClick = () => {
    if (isValueValid) {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      const updatedList = [...list, { id: Date.now(), value, date: formattedDate, time: formattedTime }];
      setList(updatedList);
      setValue('');
      setError('');
    }
  };

  const isValueValid = value.length >= 3;

  return (
    <div className={styles.app}>
      <h1 className={styles.pageHeading}>Ввод значения</h1>
      <p className={styles.noMarginText}>
        Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
      </p>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.buttonsContainer}>
        <button onClick={onInputButtonClick} className={styles.button}>
          Ввести новое
        </button>
        <button onClick={onAddButtonClick} className={styles.button} disabled={!isValueValid}>
          Добавить в список
        </button>
      </div>
      <div className={styles.listContainer}>
        <h2 className={styles.listHeading}>Список:</h2>
        {list.length > 0 ? (
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item.id} className={styles.listItem}>
                {item.value} — {item.date} {item.time}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noMarginText}>Нет добавленных элементов</p>
        )}
      </div>
    </div>
  );
}

export default App;
