import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const ToastStyled = styled(ToastContainer)`
  .Toastify__toast-theme--light {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default ToastStyled;
