import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    padding-top: 50px; 
    flex-direction: column;
    align-items: flex-start; 
    gap: 12px;
  }
`;

export const Greeting = styled.div`
  h1 {
    font-size: 24px; 
    color: #333;
  }
  
  span {
    font-size: 24px; 
  }

  p {
    color: #666;
    font-size: 16px;
  }
`;

export const DateDisplay = styled.div`  
  background: white; 
  color: #8257e5;
  padding: 12px 24px;
  border-radius: 50px; 
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    background: #f8f9fa; 
    box-shadow: none;
    border: 1px solid #eee;
    padding: 8px;
  }
`;