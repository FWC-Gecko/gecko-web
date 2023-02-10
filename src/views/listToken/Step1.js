import React, { useState } from "react";
import Input from "../../components/section/listToken/Input";
import NextButton from "../../components/section/listToken/NextButton";
import { useEffectOnce } from "../../hook/useEffectOnce";
import useLoading from "../../hook/useLoading";

function Step1({ activeStep, setActiveStep, userPositions }) {
  useEffectOnce(() => {
    const element = document.getElementById("form");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  const { setLoading } = useLoading();

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const [userPosition, setUserPosition] = useState(
    list_token_data?.userPosition
  );
  const [userName, setUserName] = useState(list_token_data?.userName);
  const [userEmail, setUserEmail] = useState(list_token_data?.userEmail);
  const [userTelegram, setUserTelegram] = useState(
    list_token_data?.userTelegram
  );

  const onNextStep = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Save the data in the LocalStorage.
    let list_token_data = JSON.parse(localStorage.getItem("list-token"));
    if (!list_token_data) list_token_data = {};
    list_token_data.userPosition = userPosition;
    list_token_data.userName = userName;
    list_token_data.userEmail = userEmail;
    list_token_data.userTelegram = userTelegram;
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
          {userPositions.map((row, key) => {
            return (
              <div
                className="flex items-center my-2 cursor-pointer"
                key={key}
                onClick={() => setUserPosition(row)}
              >
                <div
                  className={`${
                    userPosition === row
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
            value={userName}
            onChange={setUserName}
          />
        </div>
        <div className="mt-4">
          <Input
            type={"email"}
            label="Email Address"
            placeholder={"Enter Email Address"}
            value={userEmail}
            onChange={setUserEmail}
          />
        </div>
        <div className="mt-4">
          <Input
            label="Your Telegram @Username"
            placeholder={"Enter Your Telegram @Username"}
            value={userTelegram}
            onChange={setUserTelegram}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <NextButton />
        </div>
      </form>
    </div>
  );
}

export default Step1;
