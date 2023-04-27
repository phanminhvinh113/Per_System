import { FC } from "react";
import styled from "styled-components";
//

interface Props {
  message: string;
  date: string | number;
}

const DisscussComment: FC<Props> = ({ message, date }) => {
  return (
    <Wrapper>
      <div className="flex items-center">
        <ContentText>{message}</ContentText>
        <Date>{date}</Date>
      </div>
      <div className="flex justify-start">
        <Reply>Reply</Reply>
        <Like>Like</Like>
      </div>
    </Wrapper>
  );
};

export default DisscussComment;

const Wrapper = styled.div`
  padding: 10px;
`;
const ContentText = styled.h3`
  padding: 5px 15px;
  text-align: center;
  background-color: #ccc;
  border-radius: 8px;
  margin-right: 10px;
`;
const Reply = styled.span`
  margin: 0 5px;
  cursor: pointer;
`;
const Like = styled.span`
  cursor: pointer;
`;
const Date = styled.span`
  font-size: 0.75rem;
`;
