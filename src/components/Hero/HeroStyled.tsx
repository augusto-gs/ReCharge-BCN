import styled from "styled-components";

const HeroStyled = styled.section`
  margin: 20px -20px;
  height: 300px;
  background-image: url(https://i.postimg.cc/1tkBNcvp/bike-images.webp);
  background-size: cover;
  height: 500px;

  .hero {
    &__layout {
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: ${({ theme }) => theme.colors.light};
    }

    &__title {
      font-size: 32px;
    }

    &__introduction {
      font-size: 16px;
      max-width: 420px;
      font-weight: 300;
    }
  }

  @media (min-width: 480px) {
    .hero {
      &__title {
        font-size: 50px;
      }

      &__introduction {
        font-size: 22px;
      }
    }
  }
`;

export default HeroStyled;
