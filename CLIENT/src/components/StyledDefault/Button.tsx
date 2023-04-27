import styled, { css } from "styled-components";

interface ButtonProps {
  mode?: "remove" | "edit" | string | undefined;
  type?: "button";
}

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  padding: 6px 8px;
  margin: 0 5px;
  border: 1px solid #eee;
  ${(props) => {
    switch (props.mode) {
      case "remove":
        return css`
          background-color: #e05853;
          color: #fff;
        `;
      case "edit":
        return css`
          background-color: #3b373766;
          color: #28232366;
        `;
    }
  }};
`;
