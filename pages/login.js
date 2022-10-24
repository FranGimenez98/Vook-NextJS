import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Field, Form, Formik } from "formik";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginScreen() {
    const { data: session } = useSession();
    const router = useRouter();
    const { redirect } = router.query;
  
    console.log(session?.user);
  
    useEffect(() => {
      if (session?.user) {
        router.push(redirect || "/");
      }
    }, [router, session, redirect]);

  return (
    <Layout title="Login">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          signIn("credentials", {
            redirect: false,
            username: values.username,
            password: values.password,
          });
        }}
      >
        <Form>
          <label>Username</label>
          <Field name="username" type="text" />
          <label>Password</label>
          <Field name="password" type="password" />
          <button className="button" type="submit">
            LOGIN
          </button>
        </Form>
      </Formik>
    </Layout>
  );
}
