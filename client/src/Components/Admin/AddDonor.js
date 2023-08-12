import React from "react";
import {Form,Button} from 'react-bootstrap';

export default function AddDonor() {    

    return (
          <div className="row">
        <div className="col-md-4 mx-auto">
            <h1>הוספת תורם</h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>שם התורם</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
             <Form.Check
            inline
            label=""
            name="group1"
            type={'text'}
            id={`inline-${'type'}-1`}
          />
אנונימי        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>סכום התרומה</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
       <Form.Select aria-label="Default select example">
      <option>שייך לקבוצה</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>הערה/לזכות</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        הוסף
      </Button>
    </Form>
        </div>
        </div>
    );
}
