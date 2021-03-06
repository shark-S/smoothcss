import styled, { css } from 'styled-components';

export const Toast = styled.div<{ open: boolean }>`
  z-index: 99;
  position: fixed;
  left: 50%;
  padding: 10px 24px;
  color: ${(props) => props.theme.primary};
  font-weight: 500;
  background-color: ${(props) => props.theme.primaryLight};
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  top: 0;
  transform: translate(-50%, -120px);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  ${(props) =>
    props.open &&
    css`
      transform: translate(-50%, 90px);
    `}
`;
