import React from 'react'
import { Form, Input, Icon, Checkbox, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import userActions from '../../../../redux/user/actions'

const FormItem = Form.Item

class RegisterFormComponent extends React.Component {
  state = {
    confirmDirty: false,
    email: "",
    password: "",
    isEmailValid: false,
    validateStatus: "",
    isStrongPassword: false,
    isSamePassword: false
  }

  passwordLength = 8;
  strongRegex = [
    {
      regex: "(?=.*[a-z])",
      message: "password must contain at least 1 lowercase alphabetical character" 
    },
    {
      regex: "(?=.*[A-Z])",
      message: "password must contain at least 1 uppercase alphabetical character"
    },
    {
      regex: "(?=.*[0-9])",
      message: "password must contain at least 1 numeric character"
    },
    {
      regex: "(?=.*[!@#\$%\^&\*])",
      message: "password must contain at least one special character (?,=,!,@,#,$,%,^,&,*)"
    },
    {
      regex: `(?=.{${this.passwordLength}})`,
      message: `password must be ${this.passwordLength} characters long`
    }
  ]

  handleConfirmBlur = e => {
    const { value } = e.target
    const { confirmDirty } = this.state
    this.setState({
      confirmDirty: confirmDirty || !!value,
    })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props

    this.setState({ isSamePassword: false })

    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords do not match!')
    } else {
      this.setState({ isSamePassword: true })
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    const { confirmDirty } = this.state

    this.setState({ isStrongPassword: true, password: value })

    if(!value){
      callback()
    }

    this.strongRegex.forEach((passTest) => {
      if(!(new RegExp(passTest.regex).test(value))){
        this.setState({ isStrongPassword: false })
        callback(passTest.message)
      }
    })
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
  }

  validateEmail = (rule, value, callback) => {

    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    this.setState({
      isEmailValid: false,
      validateStatus: "error"
    })
    
    if(!value){
      callback()
    }
    else if(value && !re.test(value)){
      callback('Please enter a valid email!')
    }
    else{
      this.setState({
        isEmailValid: true,
        validateStatus: "success",
        email: value
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let { email, password } = this.state
    this.props.setKeyStore({ email: email, password: password })
  }

  render() {
    const { form } = this.props
    const { isEmailValid, isSamePassword, isStrongPassword, validateStatus } = this.state
    {console.log(isEmailValid); console.log(isSamePassword); console.log(isStrongPassword);}
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem validateStatus={validateStatus} hasFeedback={true}>
          {form.getFieldDecorator('email', {
            rules: [
              { 
                required: true,
              },
              {
                validator: this.validateEmail ,
              }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(.25,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </FormItem>
        <FormItem>
          {form.getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Input your password"
            />,
          )}
        </FormItem>
        <FormItem>
          {form.getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(
            <Input
              type="password"
              onBlur={this.handleConfirmBlur}
              placeholder="Confirm your password"
            />,
          )}
        </FormItem>

        <div className="form-actions">
          <Button type="primary" disabled={!(isEmailValid && isSamePassword && isStrongPassword)} htmlType="submit" className="login-form-button">
            Signup
          </Button>
          <span className="ml-3">
            {form.getFieldDecorator('mailsubscription', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Get Monthy Updates. NO SPAMMING ;)</Checkbox>)}
          </span>
        </div>
        <span className="ml-3 register-link">
          
          Already have an account? {' '}
          <NavLink to="/user/login"
            className="text-primary utils__link--underlined"
          >
            Log In
          </NavLink>
        </span>
      </Form>
    )
  }
}

const mapDisptachToProps = dispatch => ({
  setKeyStore: payload => dispatch(userActions.signup(payload))
})

const RegisterForm = Form.create()(RegisterFormComponent)
export default connect(null, mapDisptachToProps)(RegisterForm)
