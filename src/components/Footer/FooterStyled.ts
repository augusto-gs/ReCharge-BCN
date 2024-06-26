import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.typography.secondary};
  flex-wrap: wrap;
  flex-direction: column-reverse;

  .footer {
    &__trademark {
      font-size: 12px;
      font-weight: 300;
    }

    &__button {
      background: #0a84ff;
      border: none;
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.light};
      width: 160px;
      height: 45px;
    }

    &__text-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &__list-item {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  @media (min-width: 480px) {
    flex-direction: row;

    .footer {
      &__trademark {
        flex: 1;
      }

      &__button {
        width: 160px;
        height: 45px;
      }
    }
  }
`;

export default FooterStyled;
