import styled from "styled-components";
import { CiTrash } from "react-icons/ci";

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const CommentBox = styled.div`
  flex: 1;
  /* background: red; */
`;

export const CommentContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1rem;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InfoBox = styled.div``;

export const UserName = styled.strong`
  display: block;
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const Time = styled.time`
  display: block;
  font-size: 0.75rem;
  opacity: 0.3;
`;
export const DeleteButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.blueCleverpy};
  cursor: pointer;
  line-height: 0;
  border-radius: 4px;

  :hover {
    color: ${({ theme }) => theme.colors.pinkCleverpy};
  }
`;

export const Icon = styled(CiTrash)``;

export const Message = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
`;
