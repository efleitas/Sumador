import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {Segment, Form, Button, Grid, Header} from 'semantic-ui-react';
import sumar from './sumar.js'

class App extends Component {

  Operar() {
    var resultado=sumar(parseInt(document.getElementById('value1').value) , parseInt(document.getElementById('value2').value));
    if ( isNaN(resultado) )
      alert('Ingrese valores para sumar')
      else
        document.getElementById("result").value=resultado;
        document.getElementById('value1').value=null;
        document.getElementById('value2').value=null;
  }

  render() {
    return (
      <div className='App'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Sumador
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Field>
                <Form.Input type='number' id='value1' fluid placeholder='valor 1' />
                <Form.Input
                  type='number'
                  id='value2'
                  fluid
                  placeholder='Valor 2'
                />
                <Button color='blue' fluid size='large' onClick={this.Operar}>
                  Sumar
                </Button>
              </Form.Field>
              <Form.Field>
                <Form.Input id='result' fluid  value='' placeholder='Resultado'/>
              </Form.Field>
            </Segment> 
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  ); 

  }  
}

export default App;
