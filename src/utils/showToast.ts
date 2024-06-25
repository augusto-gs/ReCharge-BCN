import { toast, ToastOptions } from "react-toastify";

const showToast = (
  type: "success" | "error",
  message: string,
  options?: ToastOptions,
) => {
  switch (type) {
    case "success":
      toast.success(message, {
        style: { background: "#55b938" },
        progressStyle: { backgroundColor: "#ccEAc4" },
        ...options,
      });

      break;

    case "error":
      toast.error(message, {
        style: { background: "#d65745" },
        progressStyle: { backgroundColor: "#F3CDC8" },
        ...options,
      });

      break;
  }
};

export default showToast;
