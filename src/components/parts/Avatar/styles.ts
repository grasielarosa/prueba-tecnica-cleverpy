import styled from "styled-components";

export const AvatarImg = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.pinkCleverpy};
  outline: 2px solid ${({ theme }) => theme.colors.blueCleverpy};
`;

export const avatarWithoutBorder = {
  width: "3rem",
  height: "3rem",
  borderRadius: "4px",
};
