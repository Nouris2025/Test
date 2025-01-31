"use client";
import Link from "next/link";
import { useState } from "react";

// Define the interface for the form values
export interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formValues, setFormValues] = useState<SignInFormValues>({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const clearErrors = () => {
    setFormErrors({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    try {
      // Mock API call for sign-in
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        const data = await response.json();
        setFormErrors(data.errors || {});
      } else {
        console.log("Sign-in successful");
        // Handle successful sign-in, e.g., redirect
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark mx-auto h-screen p-4 md:p-6 2xl:p-10">
      <div className="bg border-stroke shadow-default dark:border-strokedark dark:bg-boxdark h-[100%] rounded-sm border bg-white">
        <div className="flex h-[100%] flex-wrap items-center overflow-y-scroll">
          <div className="w-full xl:block xl:w-1/2">
            <div className="sm:px-12.5 xl:px-26 xl:py-17.5 flex flex-col gap-5 px-4 py-4 text-center sm:py-9 lg:gap-10">
              <div className="h-15 relative flex items-center justify-center lg:h-40">
                {/* <Image /> */}
              </div>
              <h6 className="text-primary text-xs font-bold xl:text-xl dark:text-white">
                First remote services <br /> provider in Algeria
              </h6>
            </div>
          </div>

          <div className="border-stroke dark:border-strokedark w-full xl:w-1/2 xl:border-l-2">
            <div className="sm:p-12.5 xl:p-17.5 w-full p-4">
              <h2 className="sm:text-title-xl2 mb-9 text-2xl font-bold text-black dark:text-white">
                Sign In
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white ${
                        formErrors.email ? "border-danger" : "border-stroke"
                      }`}
                    />
                    <span className="absolute right-4 top-4">
                    </span>
                  </div>
                  {formErrors.email && (
                    <p className="text-danger pl-2">{formErrors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your password"
                      className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none dark:border-form-strokedark dark:bg-form-input dark:text-white ${
                        formErrors.password ? "border-danger" : "border-stroke"
                      }`}
                    />
                    <span className="absolute right-4 top-4">
                    </span>
                  </div>
                  {formErrors.password && (
                    <p className="text-danger pl-2">{formErrors.password}</p>
                  )}
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="border-primary bg-primary w-full cursor-pointer rounded-lg border p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>

              <p className="mt-5 text-center text-sm font-medium text-gray-700 dark:text-white">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
