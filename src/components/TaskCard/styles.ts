import styled from 'styled-components';

interface ContainerProps {
  $done: boolean;
  $categoryColor: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.$done ? '#f8f9fa' : 'white'};
  border-radius: 16px;
  padding: 24px;  
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);  
  border: 1px solid ${props => props.$done ? '#eee' : props.$categoryColor}30;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  opacity: ${props => props.$done ? 0.6 : 1};

  &:hover {
    transform: translateY(-4px); 
    box-shadow: 0 12px 24px ${props => props.$categoryColor}60; 
    border-color: ${props => props.$categoryColor}; 
  }

`;

interface CheckCircleProps {
  $done: boolean;
}

export const CheckCircle = styled.div<CheckCircleProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.$done ? '#8257e5' : '#ddd'};
  background: ${props => props.$done ? '#8257e5' : 'transparent'};
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;
  margin-top: 4px;

  &:hover {
    border-color: #8257e5;
  }
`;

export const Content = styled.div`
  flex: 1;
  
  h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 4px;
    line-height: 1.4;
    font-weight: 500;
  }
  
  span {
    font-size: 13px;
    color: #888;
  }
`;

interface TagProps {
  $color: string;
}

export const CategoryTag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  background-color: ${props => props.$color}20; 
  color: ${props => props.$color} !important;
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #ddd;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fee2e2;
    color: #ef4444;
  }
`;