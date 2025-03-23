import Container from './learning/Container';
import AuthContextProvider from './learning/store/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Container />
    </AuthContextProvider>
  );
}

export default App;
