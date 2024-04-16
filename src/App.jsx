import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>This is SolidJS! An alternative to the React and Alpine Framework!</p>
        <p>This table displays my Favorite Drinks Name, Flavor, and Price!</p>
        <table id='favoriteDrinks'>
          
        </table> <br/>

        <script type="javascript" src="/src/favoriteimport.js"></script>
      </header>
    </div>
  );
}

export default App;
