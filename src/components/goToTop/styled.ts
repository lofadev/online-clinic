import styled from 'styled-components';

const GoToTopStyled = styled.div`
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  letter-spacing: 0.35px;
  background-color: ${({ theme }) => theme.extraBlue};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export { GoToTopStyled };
