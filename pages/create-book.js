import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import Layout from "../components/Layout";

export default function CreateBookScreen() {
  return (
    <Layout title="Create Book">
      <div className="min-h-screen">
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={async (values) => {
            await axios.post(`/api/book`, { name: values.name });
          }}
        >
          <Form>
            <label>NAME</label>
            <Field name="name" />
            <button type="submit">submit</button>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
