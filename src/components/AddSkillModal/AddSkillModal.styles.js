import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Select = styled.select`
  padding: 8px;
  margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SaveButton = styled.button`
  background: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: darkgreen;
  }
`;

export const CancelButton = styled.button`
  background: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;