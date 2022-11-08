import styled from "styled-components";
import * as Dropdown from "@radix-ui/react-dropdown-menu";

export const Container = styled(Dropdown.Root)``;

export const Button = styled(Dropdown.Trigger)`
  appearance: none;
  line-height: 0;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  transition: all 150ms;
  background-color: transparent;
  opacity: 0.4;
  :hover {
    opacity: 1;
    border: none;
  }
`;

export const Portal = styled(Dropdown.Portal)`
  :hover {
    box-shadow: none;
  }
`;

export const Content = styled(Dropdown.Content)`
  background-color: ${({ theme }) => theme.colors.blueCleverpy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: none;
  padding: 0.5rem;
  min-height: fit-content;

  :hover {
    box-shadow: none;
  }
`;

export const Item = styled(Dropdown.Item)`
  cursor: default;
  border-radius: 4px;
  box-shadow: none;
  padding: 0 0.5rem;
  transition: all 100ms;

  :focus {
    outline: transparent;
    background-color: ${({ theme }) => theme.colors.pinkCleverpy};
    color: ${({ theme }) => theme.colors.white};
  }
  :hover {
    box-shadow: none;
  }
`;

export const Arrow = styled(Dropdown.Arrow)`
  fill: ${({ theme }) => theme.colors.blueCleverpy};
  width: 1rem;
  height: 0.8rem;
`;
