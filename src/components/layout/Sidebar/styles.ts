import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
export const Aside = styled.aside`
  border-radius: 8px;
  overflow: hidden;
  background-color: aliceblue;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);
`;

export const UserName = styled.strong`
  margin-top: 1rem;
  line-height: 1.6rem;
`;

export const Title = styled.span`
  font-size: 0.875rem;
  line-height: 1.6rem;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.pinkCleverpy};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
`;

export const Icon = styled(CiEdit)``;

export const Button = styled.button`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.pinkCleverpy};
  border: 1px solid ${({ theme }) => theme.colors.pinkCleverpy};
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  transition: color 0.2s, background-color 0.2s;

  :hover {
    background: ${({ theme }) => theme.colors.pinkCleverpy};
    color: ${({ theme }) => theme.colors.white};
  }
`;
