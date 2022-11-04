import styled, { css } from "styled-components";

export const Container = styled.article`
  background-color: aliceblue;
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;
`;

export const Header = styled.header`
  display: flexbox;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserBox = styled.div``;

export const UserName = styled.strong`
  display: block;
  line-height: 1.6;
`;

export const UserTitle = styled.span`
  display: block;
  line-height: 1.6;
  font-size: 0.875rem;
  opacity: 0.4;
`;

export const Time = styled.time`
  font-size: 0.875rem;
  opacity: 0.3;
`;

export const ContentBox = styled.div`
  line-height: 1.6;
  margin-top: 1.5rem;
`;

export const ContentTitle = styled.strong`
  margin-top: 1rem;
`;
export const ContentText = styled.p`
  margin-top: 1rem;
`;

export const CommentForm = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.pinkCleverpy};
`;

export const FormTitle = styled.strong`
  line-height: 1.6rem; ;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 8px;
  resize: none;
  height: 6rem;
  padding: 1rem;
  line-height: 1.4rem;
  margin-top: 1rem;
`;

export const FormButton = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.blueCleverpy};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;

  :not(:disabled):hover {
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const CommentList = styled.div`
  margin-top: 2rem;
`;
