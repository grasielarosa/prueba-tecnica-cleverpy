import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;
  background-color: ${({ theme }) => theme.colors.blueCleverpy};
`;

export const CleverpyLogo = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;

export const Title = styled.strong`
  color: ${({ theme }) => theme.colors.white};
`;
