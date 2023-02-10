import React, { useState } from "react";
import { useSelector } from "react-redux";
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
      <p className="text-2xl font-bold text-white">
        Let’s start with your Personal Information
      </p>
      <p className="text-[#A3A3A3] text-md mt-4">
        Please fill in the details below so that we can get in contact with you.
      </p>
      <hr className="text-[#DADADA] my-6" />
      <form onSubmit={onNextStep}>
        <p className="text-[#D0D0DD] font-medium">
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
                      ? "bg-[#BA4DF9] border-2 border-[#46255E]"
                      : "bg-[#54555A]"
                  }  w-4 h-4 rounded-full`}
                ></div>
                <label
                  for="red-radio"
                  className="ml-2 text-sm text-white cursor-pointer"
                >
                  {row}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <p className="text-white font-medium">Your Name</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white font-medium">Email Address</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"email"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white font-medium">Your Telegram @Username</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              value={contactTelegram}
              onChange={(e) => setContactTelegram(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <NextButton />
        </div>
      </form>
    </div>
  );
}

export default StepOne;
