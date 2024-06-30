import styled from "styled-components";

const MapDisplayStyled = styled.div`
  width: 100%;
  height: 100%;

  .location-detail {
    position: absolute;
    background: ${({ theme }) => theme.colors.tooltip};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    min-width: 280px;
    font-family: ${({ theme }) => theme.typography.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    &:after,
    &:before {
      top: 100%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &:after {
      border-top-color: white;
      border-width: 10px;
      left: 48px;
      margin-left: -10px;
    }

    &:before {
      border-top-color: #cccccc;
      border-width: 11px;
      left: 48px;
      margin-left: -11px;
    }

    &__available-stations {
      background-color: #78be20;
      color: ${({ theme }) => theme.colors.tooltip};
      border-radius: 6px;
      padding: 3px;
      text-align: center;
    }

    &__address {
      font-size: 20px;
    }

    &__closer {
      text-decoration: none;
      position: absolute;
      top: 2px;
      right: 8px;
      background-color: transparent;
      border: none;

      &:after {
        content: "✖";
      }
    }
  }
`;

export default MapDisplayStyled;
