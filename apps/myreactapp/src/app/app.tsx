// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Products } from '@myorg/products';
import { Orders } from '@myorg/orders';

export function App() {
  return (
    <div>
      <NxWelcome title="myreactapp" />
      <Products />
      <Orders />
    </div>
  );
}

export default App;
