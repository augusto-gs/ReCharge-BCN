import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .main-header {
    &__logo {
      width: 120px;
    }
  }

  @media (min-width: 480px) {
    .main-header {
      &__logo {
        width: auto;
      }
    }
  }
`;

export default HeaderStyled;
