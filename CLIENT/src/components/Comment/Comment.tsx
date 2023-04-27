import React, { Children, FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DisscussComment from "./Disscuss";
//
interface Props {}
//
interface Comment {
  text: string;
  date: string | number;
}
//

const CommentPage: FC<Props> = () => {
  //
  const textInputRef = useRef<HTMLDivElement>(null);
  const [listText, setListText] = useState<Comment[]>([]);
  const [text, setText] = useState<string>("");
  //

  //

  const handleOnChangeInput = (e: any) => {
    setText(e.target.innerText);
  };
  //
  const sendCommnet = () => {
    setListText((prev) => [
      ...prev,
      { text, date: new Date().toLocaleString() },
    ]);
    setText("");
  };
  //
  const handleSendingMessagePressEnter = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.code === "Enter" && textInputRef.current) {
      e.preventDefault();
      sendCommnet();
      textInputRef.current.innerText = "";
      textInputRef.current.focus();
    }
  };
  //

  //
  return (
    <Wrapper>
      {listText &&
        listText.map((item, index) => (
          <DisscussComment key={index} message={item.text} date={item.date} />
        ))}
      <InputWrapper>
        <InputType
          ref={textInputRef}
          contentEditable={true}
          data-placeholder="Typing..."
          spellCheck={true}
          suppressContentEditableWarning={true}
          onInput={handleOnChangeInput}
          onKeyDown={handleSendingMessagePressEnter}
        ></InputType>
      </InputWrapper>
    </Wrapper>
  );
};

export default CommentPage;
const Wrapper = styled.div`
  height: 100vh;
`;
const InputWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
`;
const InputType = styled.div`
  border-radius: 8px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  outline: none;
  width: 60%;
  margin: auto;
  max-height: 150px;
  overflow-y: overlay;
  &:empty:before {
    content: attr(data-placeholder);
    color: gray;
  }
  &:hover {
    cursor: text;
  }
`;
