import { toast } from "react-toastify";

const showToast = (
  type: "success" | "error",
  message: string,
  options?: object,
) => {
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
  }
};

export default showToast;
