import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  const handleNextClick = () => {
    if (activeIndex < steps.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleAgainClick = () => {
    setActiveIndex(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>{steps[activeIndex].content}</div>
          <ul className={styles['steps-list']}>
            {steps.map((step, index) => {
              let itemClass = styles['steps-item'];
              if (index <= activeIndex) {
                itemClass += ' ' + styles.done;
              }
              if (index === activeIndex) {
                itemClass += ' ' + styles.active;
              }

              return (
                <li key={step.id} className={itemClass}>
                  <button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>
                    {index + 1}
                  </button>
                  {step.title}
                </li>
              );
            })}
          </ul>
          <div className={styles['buttons-container']}>
            <button className={styles.button} onClick={handleBackClick} disabled={isFirstStep}>
              Назад
            </button>
            {isLastStep ? (
              <button className={styles.button} onClick={handleAgainClick}>
                Начать сначала
              </button>
            ) : (
              <button className={styles.button} onClick={handleNextClick}>
                Далее
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
