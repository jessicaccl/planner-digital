import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  background-color: #f8f9fa;
`;

interface MainProps {
  $isSidebarOpen: boolean;
}

export const Main = styled.main<MainProps>`
  flex: 1;
  padding: 32px;
  height: 100vh; 
  overflow-y: auto;   
  margin-left: ${props => props.$isSidebarOpen ? '280px' : '80px'};  
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0; 
    padding: 20px;
    width: 100%;
    padding-bottom: 100px; 
  }
`;

export const ContentGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  
  width: 64px;
  height: 64px;
  border-radius: 50%; 
  
  background: #8257e5;
  color: white;
  border: none;
  box-shadow: 0 4px 20px rgba(130, 87, 229, 0.4);
  
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 100; 

  &:hover {
    transform: scale(1.1); 
    background: #7146ce;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    bottom: 24px;
    right: 24px;
  }
`;

export const CardPlaceholder = styled.div`
  background: white;
  height: 180px;
  border-radius: 16px;
  padding: 24px;
  border: 1px dashed #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
`;