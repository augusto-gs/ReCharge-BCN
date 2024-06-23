import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-family: inherit;
  font-weight: 900;

  &.button {
    &--hero {
      text-transform: uppercase;
    }

    &--detail {
      background-color: #e7eaee;
      width: 100px;
      height: 32px;
      font-weight: 400;
      color: #64748b;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export default ButtonStyled;
