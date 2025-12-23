import { useState } from 'react';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { Layout, Main } from './App.styles';
import { Sidebar } from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth > 768);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <Layout>
      <GlobalStyle />      
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />      
      <Main $isSidebarOpen={isSidebarOpen}>
        <Router />
      </Main>
    </Layout>
  );
}

export default App;