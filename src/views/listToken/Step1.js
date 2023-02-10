import React, { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/section/listToken/Input";
import NextButton from "../../components/section/listToken/NextButton";
import { useEffectOnce } from "../../hook/useEffectOnce";
import useLoading from "../../hook/useLoading";

function StepOne({ activeStep, setActiveStep }) {
  useEffectOnce(() => {
    const element = document.getElementById("form");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  const { setLoading } = useLoading();
  const user = useSelector((state) => state.auth.user);

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const positions = [
    "Founder",
    "Member of the Leadership Team",
    "CEO",
    "Admin / Community Manager",
    "CMO",
    "Administrative Assistant",
  ];
  const [position, setPosition] = useState(
    list_token_data?.position ? list_token_data.position : positions[0]
  );

  const [name, setName] = useState(list_token_data?.name);
  const [contactEmail, setContactEmail] = useState(
    list_token_data?.contactEmail || user?.email
  );
  const [contactTelegram, setContactTelegram] = useState(
    list_token_data?.contactTelegram
  );

  const onNextStep = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Save the data in the LocalStorage.
    let list_token_data = JSON.parse(localStorage.getItem("list-token"));
    if (!list_token_data) list_token_data = {};
    list_token_data.position = position;
    list_token_data.name = name;
    list_token_data.contactEmail = contactEmail;
    list_token_data.contactTelegram = contactTelegram;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
    setLoading(false);
    // Go to the next step.
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <p className="text-2xl font-bold ">
        Let’s start with your Personal Information
      </p>
      <p className="text-[#3C3C3C] dark:text-[#A3A3A3] text-md mt-4">
        Please fill in the details below so that we can get in contact with you.
      </p>
      <hr className="text-black/50 text-[#DADADA] my-6" />
      <form onSubmit={onNextStep}>
        <p className="dark:text-[#D0D0DD] font-bold">
          Please Confirm Your Position with the Project.
        </p>
        <div className="sm:grid grid-cols-2 w-max mt-2">
          {positions.map((row, key) => {
            return (
              <div
                className="flex items-center my-2 cursor-pointer"
                key={key}
                onClick={() => setPosition(row)}
              >
                <div
                  className={`${
                    position === row
                      ? "bg-[#BA4DF9] border-2 border-[#DDBCF3] dark:border-[#46255E]"
                      : "bg-[#9F9F9F] dark:bg-[#54555A]"
                  }  w-4 h-4 rounded-full`}
                ></div>
                <label
                  for="red-radio"
                  className="ml-2 text-sm text-[#646464] dark:text-white  cursor-pointer"
                >
                  {row}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Input
            label="Your Name"
            placeholder={"Enter Your Name"}
            value={name}
            onChange={setName}
          />
        </div>
        <div className="mt-4">
          <Input
            type={"email"}
            label="Email Address"
            placeholder={"Enter Email Address"}
            value={contactEmail}
            onChange={setContactEmail}
          />
        </div>
        <div className="mt-4">
          <Input
            label="Your Telegram @Username"
            placeholder={"Enter Your Telegram @Username"}
            value={contactTelegram}
            onChange={setContactTelegram}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <NextButton />
        </div>
      </form>
    </div>
  );
}

export default StepOne;
