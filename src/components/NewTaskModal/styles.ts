import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px); 
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 
`;

export const ModalContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  position: relative;
 
  animation: appear 0.3s ease-out;

  @keyframes appear {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 24px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  input, select {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #ddd;
    font-size: 16px;
    outline: none;
    transition: border 0.2s;

    &:focus {
      border-color: #8257e5;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;

  button {
    flex: 1;
    padding: 14px;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }
`;

export const SaveButton = styled.button`
  background: #8257e5;
  color: white;
  &:hover { background: #6f48c5; }
`;

export const CancelButton = styled.button`
  background: #f5f5f5;
  color: #666;
  &:hover { background: #eee; }
`;