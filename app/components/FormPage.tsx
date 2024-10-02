import { FormDetails } from "./PageParts/FormDetails";

export const FormPage = () => {
  return (
    <div className=" w-full flex justify-center bg-gradient-to-b from-black to-orange-500">
      <div className="max-screen-w-5xl w-full">
        <FormDetails />
      </div>
    </div>
  );
};
