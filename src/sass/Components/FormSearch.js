import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';


const FormSearch = (props) => {
    return (
        <Form className={props.name}>
              
                <InputGroup>
                    <FormControl id="inlineFormInputGroup" placeholder={props.placeHolder} className="rounded-0" />
                    <InputGroup.Prepend>
                        <InputGroup.Text className="rounded-0">
                            <FaSearch/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form>
    )
}

export default FormSearch
