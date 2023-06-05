// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { ModulesOrders } from '@myreactapp/modules/orders';
import { ModulesProducts } from '@myreactapp/modules/products';

export function App() {
  return (
    <div>
      <NxWelcome title="myreactapp" />
      <ModulesOrders />
      <ModulesProducts />
    </div>
  );
}

export default App;
