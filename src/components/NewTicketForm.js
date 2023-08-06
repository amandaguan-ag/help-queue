import React from "react";
import PropTypes from "prop-types"; //import PropTypes
import { v4 } from "uuid"; // new code
import ReusableForm from "./ReusableForm";


  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });

    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleNewTicketFormSubmission}
          buttonText="Help!"
        />
      </React.Fragment>
    );
  }

// We also need to add PropTypes for our new prop.

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;