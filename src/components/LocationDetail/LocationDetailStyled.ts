import styled from "styled-components";

const LocationDetailStyled = styled.ul`
  position: relative;
  bottom: 170px;
  width: 241px;
  height: 130px;
  background: ${({ theme }) => theme.colors.tooltip};
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.typography.secondary};
  align-items: center;

  .location-detail {
    &__address {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export default LocationDetailStyled;
