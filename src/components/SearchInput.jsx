import React, { useRef } from "react";
import TextField from "@mui/material/TextField";

export default function SearchInput({input}) {
  const ref = useRef(null);

  function handleInput(e) {
    const inputValue = ref.current.value;
    if (e.key === "Enter") {
      input(inputValue);
    }
  }
  return (
    <>
      <TextField
        inputRef={ref}
        color="secondary"
        onKeyDown={handleInput}
        id="outlined-basic"
        label="Search Your Name"
        variant="outlined"
      />
    </>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
