import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation-bar {
    &__container {
      display: flex;
      gap: 25px;
    }

    &__text {
      font-family: ${({ theme }) => theme.typography.secondary};
    }
  }

  .active {
    border-bottom: solid 2px;
    font-weight: 900;
  }

  @media (min-width: 480px) {
    .navigation-bar {
      &__container {
        gap: 50px;
        font-size: 20px;
      }
    }
  }
`;

export default NavigationStyled;
