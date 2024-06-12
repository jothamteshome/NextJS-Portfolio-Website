import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


/**
 * Represents a field in the FeedbackForm element
 * @param {object} props - The props object
 * @param {object} props.field_data - An object containing information about a field to build 
 * @returns Returns a Form input element with specified type and floating label
 */
const FormField = function ({ field_data }) {
    return (
        <FloatingLabel className='mb-3' controlId={field_data.id} label={field_data.label}>
            <Form.Control type={field_data.type} placeholder={field_data.placeholder} required />
        </FloatingLabel>
    );
};


/**
 * Represents a Form to submit comments or message me
 * @returns {JSX.Element} A Form element containing fields such as name, email, and comments
 */
const FeedbackForm = function () {
    // Information about fields to create for form
    const form_fields = [
        { id: 'floatingName', label: 'Full Name', type: 'text', placeholder: "First Last" },
        { id: 'floatingEmail', label: 'Email Address', type: 'email', placeholder: "name@email.com" },
        { id: 'floatingComments', label: 'Comments?', type: 'textarea', placeholder: "Comments?" }
    ]


    const processForm = (event) => {
        event.preventDefault();

        const form_data = {
            name: document.getElementById('floatingName').value,
            email: document.getElementById('floatingEmail').value,
            comments: document.getElementById('floatingComments').value
        }


        // Send form data to fabform.io form endpoint
        fetch(`https://fabform.io/f/${process.env.NEXT_PUBLIC_FABFORM_ID}`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_data)
            }
        )
            .then(response => response.json())
            .then(data => {
                if (data.success === "true") {
                    document.getElementById('form-success-msg').innerHTML = "<p class='text-success m-0'>Form submitted successfully!</p>"

                    // Reset the form if content is submitted successfully
                    document.getElementById('feedback-form').reset();
                } else {
                    throw new Error('Server response indicates failure');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('form-success-msg').innerHTML = "<p class='text-danger m-0'>An error occurred while submitting the form.</p>"
            })
    }

    return (
        <Form id="feedback-form" onSubmit={processForm}>
            {form_fields.map((field, i) => (
                <FormField key={i} field_data={field} />
            ))
            }
            <Form.Group className='mb-3 d-flex justify-content-between' controlId='formGroupSubmitButton'>
                <div id="form-success-msg" className='my-auto'></div>
                <Button as="input" type="submit" value="Submit" className='btn-primary' />
            </Form.Group>
        </Form>
    );
};

export default FeedbackForm;
