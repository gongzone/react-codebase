import { GlobalStyle } from './commons/design-system/global-style';
import { Button } from '@/commons/design-system/button';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Button variant="primary">hi!</Button>
    </>
  );
};

export default App;
