import React from 'react'
import Link from 'gatsby-link'
import Form from '../components/Form'

var Checkbox = require('react-bootstrap/lib/Checkbox')
var Radio = require('react-bootstrap/lib/Radio')
var FormGroup =  require('react-bootstrap/lib/FormGroup')
var ControlLabel = require('react-bootstrap/lib/ControlLabel')
var FormControl = require('react-bootstrap/lib/FormControl')
var Button = require('react-bootstrap/lib/Button')

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

const ContactPage = () => (
  <div>
    <div className="grid-item" style={{ height:'300px',backgroundColor:'white',boxShadow:'0 10px 30px -5px black' }}>
    <h1>Contact Info</h1>
    </div>
    <div className="grid-column" style={{ gridTemplateColumns:'1fr 1fr', backgroundColor:'#404040',color:'white' }}>
    <div style={{ padding: '40px 20px 40px 200px' }}>
    <FieldGroup
        id="formControlsText"
        type="text"
        label="Text"
        placeholder="Enter text"
      />
      <FieldGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      />
      <FieldGroup id="formControlsPassword" label="Password" type="password" />
      <FieldGroup
        id="formControlsFile"
        type="file"
        label="File"
        help="Example block-level help text here."
      />
  
      <Checkbox checked readOnly>
        Checkbox
      </Checkbox>
      <Radio checked readOnly>
        Radio
      </Radio>
  
      <FormGroup>
        <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
        <Checkbox inline>3</Checkbox>
      </FormGroup>
      <FormGroup>
        <Radio name="radioGroup" inline>
          1
        </Radio>{' '}
        <Radio name="radioGroup" inline>
          2
        </Radio>{' '}
        <Radio name="radioGroup" inline>
          3
        </Radio>
      </FormGroup>
    </div>
    <div style={{ padding: '40px 200px 20px 40px' }}>
    <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
      <FormGroup controlId="formControlsSelectMultiple">
        <ControlLabel>Multiple select</ControlLabel>
        <FormControl componentClass="select" multiple>
          <option value="select">select (multiple)</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
  
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Textarea</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
  
      <FormGroup>
        <ControlLabel>Static text</ControlLabel>
        <FormControl.Static>email@example.com</FormControl.Static>
      </FormGroup>
  
      <Button type="submit">Submit</Button>
    </div>
    </div>
  </div>
)

export default ContactPage
