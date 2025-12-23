import styled from 'styled-components';

export const ContentGrid = styled.div`
  display: grid;  
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
  padding-bottom: 100px; 

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