// Redux toolkit
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";

// Toast
import { popupShowToast } from "@/features/app/redux/popupSlice";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLoggerMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      const payload = action.payload.data.message;
      const description = payload ?? "Tejadi kesalahan";
      dispatch(popupShowToast({ type: "error", title: "Error", description }));
    }

    return next(action);
  };
