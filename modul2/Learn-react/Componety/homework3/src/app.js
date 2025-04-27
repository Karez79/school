import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [isResult, setIsResult] = useState(false);

  const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

  const handleNumberClick = (num) => {
    if (isResult) {
      setOperand1(num);
      setOperand2('');
      setOperator('');
      setIsResult(false);
      return;
    }

    if (operator === '') {
      setOperand1(operand1 + num);
    } else {
      setOperand2(operand2 + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (op === 'C') {
      setOperand1('');
      setOperand2('');
      setOperator('');
      setIsResult(false);
    } else if (op === '+' || op === '-') {
      if (operand1 !== '') {
        setOperator(op);
        setIsResult(false);
      }
    } else if (op === '=') {
      if (operand1 !== '' && operator !== '' && operand2 !== '') {
        const num1 = parseInt(operand1);
        const num2 = parseInt(operand2);
        let result = 0;

        if (operator === '+') {
          result = num1 + num2;
        } else if (operator === '-') {
          result = num1 - num2;
        }

        setOperand1(result.toString());
        setOperand2('');
        setOperator('');
        setIsResult(true);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={`${styles.display} ${isResult ? styles.result : ''}`}>
        {operand1}
        {operator}
        {operand2}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((num) => (
          <button key={num} className={styles.button} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button className={styles.button} onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button className={styles.button} onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button className={styles.button} onClick={() => handleOperatorClick('=')}>
          =
        </button>
        <button className={styles.button} onClick={() => handleOperatorClick('C')}>
          C
        </button>
      </div>
    </div>
  );
};
