import styled from 'styled-components';

export const CodeEditor = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  display: flex;
`;

export const LineNums = styled.div`
  width: 30px;
  padding: 10px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  box-sizing: border-box;
  user-select: none;
`;

export const ButtonsSection = styled.div`
  background-color: #f5f5f5;
  padding: 0.5rem;
`;

export const CodeArea = styled.textarea`
  flex: 1;
  padding: 10px;
  line-height: 1.5;
  border: 1px solid #ddd;
  box-sizing: border-box;
  resize: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #ff2200;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
`;
