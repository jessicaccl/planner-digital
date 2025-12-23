import styled from 'styled-components';

export const Container = styled.div`  
  background-image: url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  background-size: cover;
  background-position: center;
  
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
  
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to right, rgba(130, 87, 229, 0.9), rgba(130, 87, 229, 0.4));
    z-index: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  
  h3 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.8;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 16px;
    max-width: 85%;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const RefreshButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 3; 
  
  background: rgba(255, 255, 255, 0.2); 
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(180deg); 
  }
`;