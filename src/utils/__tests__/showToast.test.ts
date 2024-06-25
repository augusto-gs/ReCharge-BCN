import showToast from "../showToast";
import { toast } from "react-toastify";

describe("Given a showToast function", () => {
  describe("When it is called with a parameter 'success' and a 'Success!' message", () => {
    test("Then it should call the success method of toast module", () => {
      const toastType = "success";
      const toastMessage = "Success!";
      const expectedOptions = {
        style: { background: "#55b938" },
        progressStyle: { backgroundColor: "#ccEAc4" },
      };

      const spy = vi.spyOn(toast, "success");

      showToast(toastType, toastMessage);

      expect(spy).toHaveBeenCalledWith(toastMessage, expectedOptions);
      spy.mockRestore();
    });
  });

  describe("When it is called with a parameter 'error' and an 'Error!' message", () => {
    test("Then it should call the error method of toast module with correct parameters", () => {
      const toastType = "error";
      const toastMessage = "Error!";
      const expectedOptions = {
        style: { background: "#d65745" },
        progressStyle: { backgroundColor: "#F3CDC8" },
      };

      const spy = vi.spyOn(toast, "error");

      showToast(toastType, toastMessage);

      expect(spy).toHaveBeenCalledWith(toastMessage, expectedOptions);
      spy.mockRestore();
    });
  });
});
