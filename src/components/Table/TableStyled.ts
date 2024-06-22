import styled from "styled-components";

const TableStyled = styled.section`
  .charging-points {
    &__title {
      font-size: 25px;
    }

    &__introduction {
      font-weight: 300;
      color: #64748b;
      margin: 5px 0 32px;
    }
  }

  .table {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__item {
      border-bottom: solid #e7eaee 1px;
      padding-bottom: 8px;
    }
  }
`;

export default TableStyled;
