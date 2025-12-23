import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobileTrigger = styled.button`
  display: none; 

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 99; 
    
    width: 48px;
    height: 48px;
    border-radius: 12px;
    border: none;
    
    background: #ffffff;
    color: #8257e5;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 0.2s;

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 98; 
    backdrop-filter: blur(2px);
  }
`;

export const Container = styled.aside<{ $isOpen: boolean }>`
  background: #ffffff;
  
  width: ${props => props.$isOpen ? '280px' : '80px'};
  height: 100vh;  
  padding: 24px 12px;
  
  display: flex;
  flex-direction: column;  
  border-right: 1px solid #f0f0f0;
  
  position: fixed;
  left: 0; top: 0;
  z-index: 100; 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 

  @media (max-width: 768px) {
    width: 280px; 
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    box-shadow: ${props => props.$isOpen ? '4px 0 20px rgba(0,0,0,0.1)' : 'none'};
  }
`;

export const LogoArea = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;  
  justify-content: ${props => props.$isOpen ? 'flex-start' : 'center'};
  margin-top: 0;
  padding-left: ${props => props.$isOpen ? '12px' : '0'};

  h2 {
    color: #333;
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;     
    display: ${props => props.$isOpen ? 'block' : 'none'};
    
    opacity: ${props => props.$isOpen ? 1 : 0};
    transition: opacity 0.2s 0.1s;
  }
  
  @media (max-width: 768px) {
     margin-top: 10px; 
     justify-content: flex-start; 
  }
`;

export const ToggleButton = styled.button`
  background: #f5f3ff;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: #8257e5;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  align-self: flex-end; 
  margin-bottom: 20px;
  transition: 0.2s;

  &:hover {
    background: #ebe5ff;
  }

  .desktop-icon { display: flex; }
  .mobile-icon { display: none; }

  @media (max-width: 768px) {    
    width: 40px; 
    height: 40px;
    margin-bottom: 10px;
    background: transparent;

    .desktop-icon { display: none; }
    .mobile-icon { display: flex; }

    &:hover {
      background: #f5f5f5;
    }
  }
`;

export const MenuItem = styled(NavLink)<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;  
  justify-content: ${props => props.$isOpen ? 'flex-start' : 'center'};
  
  gap: 16px;
  text-decoration: none;
  color: #666;   
  padding: 12px; 
  border-radius: 12px;
  margin-bottom: 8px;
  transition: all 0.2s;
    
  svg {
    min-width: 24px;
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;    
    display: ${props => props.$isOpen ? 'block' : 'none'};
    opacity: ${props => props.$isOpen ? 1 : 0};
    transition: opacity 0.2s;
  }
  
  &:hover {
    background: #f8f9fa;
    color: #8257e5;
  }

  &.active {
    background: #f0ecfc; 
    color: #8257e5;
    font-weight: 600;
  }
`;

export const PlayerContainer = styled.div<{ $isOpen: boolean }>`
  margin-top: auto; 
  margin-bottom: 20px;
  background: #f5f3ff;
  border-radius: 16px;
  padding: 16px;  
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  
  flex-direction: column;
  gap: 12px;
  
  // Só mostra se estiver aberto. No fechado some.
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: opacity 0.3s;
`;

export const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  div {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  strong {
    font-size: 14px;
    color: #8257e5;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  span {
    font-size: 11px;
    color: #999;
  }
`;

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 12px;
  padding: 8px;
  
  button {
    background: transparent;
    border: none;
    color: #8257e5;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    
    &:hover {
      background: #f0ecfc;
    }
    
    &.play-btn {
      background: #8257e5;
      color: white;
      box-shadow: 0 4px 10px rgba(130, 87, 229, 0.3);
      
      &:hover {
        background: #7146ce;
      }
    }
  }
`;