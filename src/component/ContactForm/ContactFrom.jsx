import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import "./Contact.css";

const MySwal = withReactContent(Swal);

function Contact() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      MySwal.fire(<p>Feedback submitting</p>);
    }
  }, [loading]);

  const contactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const handleContactSubmit = (values, actions) => {
    actions.setSubmitting(true);
    setLoading(true);
    const regPostObj = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    const regUrl = "https://feedback.techknowgram.net/api/send/mail/feedback";

    axios
      .post(regUrl, regPostObj)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          actions.setSubmitting(false);
          setLoading(false);

          actions.resetForm();
          MySwal.fire(<p>Feedback submitted successfully</p>);
        }
      })
      .catch((error) => {
        console.log("errors", error);
        actions.setSubmitting(false);
        setLoading(false);

        if (error.response && error.response.data && error.response.data.message) {
          return MySwal.fire(<p>{error.response.data.message}</p>);
        }
      });
  };

  return (
    <div>
      <section
        style={{
          background: "linear-gradient(180deg, #ffffff, #daeefb)",
        }}
      >
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4" id="contact-us-section">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 bg-[#9333EA] w-16 md:w-32"></div>
              <h2 style={{textAlign:"center",padding:"10px"}} className="text-3xl md:text-4xl font-bold text-gray-800 mx-4">Contact Us</h2>
              <div className="h-1 bg-[#9333EA] w-16 md:w-32"></div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
                <div className="w-full h-64 md:h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14606.919383121896!2d90.369828!3d23.7570113!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3755bf05595fa707%3A0x9de93d0b60743e09!2sTechKnowGram%20Limited!5e0!3m2!1sen!2sbd!4v1719227594210!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-6 md:p-8 rounded-lg shadow-md bg-gray-50">
                  <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    validationSchema={contactSchema}
                    onSubmit={handleContactSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                          </label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border border-[#9333EA] rounded-lg focus:outline-none focus:border-[#9333EA] focus:ring focus:ring-[#9333EA]"
                          />
                          <ErrorMessage name="name" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-[#9333EA] rounded-lg focus:outline-none focus:border-[#9333EA] focus:ring focus:ring-[#9333EA]"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Message
                          </label>
                          <Field
                            as="textarea"
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full px-3 py-2 border border-[#9333EA] rounded-lg focus:outline-none focus:border-[#9333EA] focus:ring focus:ring-[#9333EA]"
                          />
                          <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="bg-[#9333EA] hover:bg-[#832aff] text-white px-4 py-2 rounded-lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
