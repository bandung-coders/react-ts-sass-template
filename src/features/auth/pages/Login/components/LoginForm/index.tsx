// React
import React, { useCallback } from "react";

// Formik & Yup
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Components
import {
  AppButton,
  AppCheckBox,
  AppInput,
  AppText,
} from "@/features/app/components";

// Interfaces
import { type ILoginBody } from "@features/auth/redux/rtk/interfaces";

// Custom hooks
import { useAuth } from "@/features/auth/hooks";
import { useAppDispatch } from "@/features/app/hooks";
import { authSetAuthenticatedUser } from "@/features/auth/redux/slice";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { login, isLoadingLogin } = useAuth();

  /**
   * @description On submit login form
   *
   * @param values ILoginBody
   *
   * @returns Promise<void>
   */
  const onSubmitForm = useCallback(
    async (values: ILoginBody, { resetForm }: any): Promise<void> => {
      console.log(resetForm);

      try {
        const response = await login({ body: values }).unwrap();
        dispatch(authSetAuthenticatedUser(response));
      } catch (_) {
        resetForm();
      }
    },
    [dispatch, login]
  );

  // Validation Form
  const validationSchema = Yup.object().shape({
    user: Yup.string().required("Tidak boleh kosong"),
    password: Yup.string().required("Tidak boleh kosong"),
  });

  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {({ errors, touched }) => (
        <Form className="login__form">
          <Field
            as={AppInput}
            name="user"
            label="Email address or username"
            placeholder="Email address or username"
            errorMessage={errors.user && touched.user && errors.user}
          />

          <Field
            as={AppInput}
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            errorMessage={
              errors.password && touched.password && errors.password
            }
          />

          <AppText className="text--underline" weight="semibold">
            Forgot your password?
          </AppText>

          <div className="d-flex justify-between align-center mt-4">
            <AppCheckBox label="Remember me" />

            <AppButton
              loading={isLoadingLogin}
              type="submit"
              variant="spotify"
              width="121px"
              size="large"
              rounded="large"
            >
              LOG IN
            </AppButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
