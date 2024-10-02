"use client";
import { inputDetails, otherCourse } from "@/app/src/constant/FormInputMap";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type FormInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryAddress: string;
  itPosition?: string;
  course?: string;
  feedBackEssay?: string;
  feedBackCheck?: string | string[];
};

export const FormDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();
  const [isSubnitted, setIsSubmitted] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setIsSubmitted(false);
    data.feedBackCheck = selectedCourses;
    console.log(data);
    setIsSubmitted(true);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryAddress: "",
      itPosition: "",
      course: "Cybersecurity Awareness",
      feedBackEssay: "",
      feedBackCheck: "",
    });
    setSelectedCourses([]);
  };

  const handleCheckboxChange = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const emailPattern = /^S+@S+$/i;
  return (
    <div className="flex justify-center w-full py-10 w-full px-3 font-poppins ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col flex  w-full max-w-lg space-y-4 p-3 shadow-3xl "
      >
        {inputDetails.map((data, index) => (
          <div key={index}>
            <div className="text-white">
              {data.placeHolder}
              {data.required && "*"}
            </div>
            <div>
              {!data.courseSelect ? (
                <div>
                  {data.field !== "feedBackEssay" ? (
                    <input
                      className="w-full border-2 border-gray-500 h-12 p-2"
                      type={
                        data.field === "email"
                          ? "email"
                          : data.field === "phone"
                          ? "number"
                          : "text"
                      }
                      placeholder={data.placeHolder}
                      {...register(data.field, {
                        required: data.required
                          ? `${data.placeHolder} is required`
                          : false,
                        maxLength: 80,
                      })}
                    />
                  ) : (
                    <textarea
                      className="w-full border-2 border-gray-500 h-24 p-2"
                      placeholder={data.placeHolder}
                      {...register(data.field, {
                        required: data.required
                          ? `${data.placeHolder} is required`
                          : false,
                      })}
                    />
                  )}
                </div>
              ) : (
                <div>
                  <select
                    className="w-full h-12"
                    {...register(data.field, { required: data.required })}
                  >
                    {data.courseSelect.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            {errors[data.field]?.message && (
              <div className="text-md text-red-500 flex py-2 drop-shadow-whiteLine ">
                <div className="border-2 text-sm rounded-full border-red-500 w-[1.3rem] pb-2 h-[1.3rem] text-center ">
                  !
                </div>
                <div className="px-3 ">{errors[data.field]?.message}</div>
              </div>
            )}
          </div>
        ))}

        <div>
          <div className="text-white ">
            What other courses do you want to see in the future?
          </div>
          <div className="px-2 md:px-4 space-y-2 tracking-normal md:tracking-wide py-4">
            {otherCourse.map((course, index) => (
              <div key={index}>
                <label
                  className="hover:cursor-pointer flex"
                  style={{ background: "none" }}
                >
                  <input
                    type="checkbox"
                    className="absolute opacity-0"
                    checked={selectedCourses.includes(course)}
                    onChange={() => handleCheckboxChange(course)}
                  />
                  <div
                    className={`w-[1.5rem] h-[1.5rem]  border-2  border-gray-500 rounded flex items-center justify-center ${
                      selectedCourses.includes(course)
                        ? " text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {selectedCourses.includes(course) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="pl-2">{course}</div>
                </label>
              </div>
            ))}
          </div>
          <input
            className="w-full bg-amber-500 drop-shadow-md py-2 text-white hover:cursor-pointer shadow-xl"
            type="submit"
          />

          {isSubnitted && (
            <div className="py-5  text-white italic drop-shadow-whiteLine text-center font-bold text-lg">
              Form submitted Successfully!
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
