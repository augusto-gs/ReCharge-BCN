import styled from "styled-components";

const LocationCardStyled = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "top-left top-left top-right"
    "bottom bottom bottom";
  gap: 5px;

  .location-card {
    &__address {
      letter-spacing: -0.6px;
      grid-area: top-left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-style: normal;
    }

    &__status {
      color: #064e3b;
      background-color: #ecfdf5;
      padding: 5px;
      border-radius: 4px;
      font-size: 13px;
      grid-column: 3;
      justify-self: end;
      height: fit-content;
    }
  }

  .gdNoIB {
    grid-column: 2 / 3;
    justify-self: center;
  }

  @media (min-width: 480px) {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .location-card {
      &__status {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export default LocationCardStyled;
