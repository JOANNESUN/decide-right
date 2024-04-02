import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function InputFields(props) {
  const [question, setQuestion] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  function validateForm() {
    let isValid = true;
    let newErrors = "";

    if (!question.trim()) {
      newErrors = "Please enter a question.";
      isValid = false;
    } else if (question.trim().length < 5 || question.trim().length > 50) {
      newErrors = "questions length: 5-50 letters";
      isValid = false;
    } else if (!/^[a-zA-Z0-9\s?]+$/.test(question)) {
      newErrors = "Name must contain only letters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  console.log(errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitSuccess(true);
      props.onFormSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box mb={2} mt={4} width="100%" minWidth="30em" mx="auto">
        <TextField
          fullWidth
          id="userInput"
          name="name"
          label="Please enter your question here:"
          variant="outlined"
          value={question}
          color="secondary"
          onChange={handleChange}
          required
        />
        {errors && <div className="error">{errors}</div>}
      </Box>
      <Button variant="contained" color="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default InputFields;
