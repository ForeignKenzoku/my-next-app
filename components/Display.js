
import styles from '../styles/Display.css';

export default function Display({ message }) {
  return (
    <div className={styles.container}>
      <h2>Display</h2>
      {message ? (
        <p>{message}</p>
      ) : (
        <p>No message to display.</p> // Conditional rendering
      )}
    </div>
  );
}