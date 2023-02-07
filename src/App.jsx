import './App.css';
import { TechProvider } from './context/providers/techContext';
import { UserProvider } from './context/providers/userContext';
import { RoutesMain as Router } from './routes';
import { Global } from './styles/global';

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <TechProvider>
          <Router />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
