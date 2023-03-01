import React, { useState } from "react";

function FileSelect(props) {
  const [file, setFile] = useState();
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    // Assuming only image
    const file = event.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };

  return (
    <>
      <p>Attachments(optional)</p>
      <div
        className="bg-[#575A70]/10 dark:bg-[#202129] w-full h-12 flex justify-center items-center rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <input
          type={"file"}
          className="hidden"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
        <p>Add file</p>
      </div>
    </>
  );
}

export default FileSelect;
