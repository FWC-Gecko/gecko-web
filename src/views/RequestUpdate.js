import React from "react";

function RequestUpdate() {
  const requestTypes = [
    { slug: "1", text: " [New Listing] Add cryptoasset" },
    {
      slug: "1a",
      text: "[New listing] ICO Calendar Form redirect [Apply here instead - https://tinyurl.com/yvwf7ra3]",
    },
    { slug: "2", text: "2 - [New Listing] Add exchange" },
    {
      slug: "3",
      text: "3 - [Existing Cryptoasset & Exchange] Add market/pair",
    },
    { slug: "4", text: "4 - [Existing Cryptoasset] Update supply figures" },
  ];

  return (
    <div>
      <div className="n-container py-5 smLpy-10">
        <p className="text-3xl font-bold">Submit a request</p>
        <form className="text-sm">
          <p className="mt-10">
            For advertising queries, please complete this form -
            https://coinmarketcap.com/advertising. Please review ALL the options
            and select the CORRECT form to ensure that your request gets routed
            to the correct team. Priority will be given to requesters that
            submit well-structured, actionable, and complete information to the
            CORRECT form.
          </p>
          <select className="mt-3 px-2 py-2 outline-none itemBg1 ">
            {requestTypes.map((row, key) => {
              return <option value={row?.slug}>{row?.text}</option>;
            })}
          </select>
        </form>
      </div>
    </div>
  );
}

export default RequestUpdate;
