import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import userActions  from '../../../redux/user/actions'
import styles from './style.module.scss'

@Form.create()
@connect(({ user }) => ({ user }))
class Login extends Component {

  onSubmit = event => {
    event.preventDefault()
    const { form, login } = this.props
    let { email, password } = form.getFieldsError(['email', 'password'])

    if(!(email || password)){
      let formData = form.getFieldsValue(['email', 'password'])

      if(formData.email && formData.password){
        login({ ...formData })        
      }
      else{
        console.error("some fields are not filled")
      }
    }
    else{
      console.error(email, password)
    }
  }

  render() {

    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const {
      form,
      user: { fetching },
    } = this.props
    return (
      <div>
        <Helmet title="Login" />
        <div className={`${styles.title} login-heading`}>
          <h1>
            <strong>WELCOME TO CLEAN UI REACT - REACT REDUX ADMIN TEMPLATE</strong>
          </h1>
          <p>
            Pluggable enterprise-level react application framework.
            <br />
            An excellent front-end solution for web applications built upon Ant Design and UmiJS.
            <br />
            Credentials for testing purposes - <strong>admin@mediatec.org</strong> /{' '}
            <strong>cleanui</strong>
          </p>
        </div>
        <div className={styles.block}>
          <div className="row">
            <div className="col-xl-12">
              <div className={styles.inner}>
                <div className={styles.form}>
                  <h4 className="text-uppercase">
                    <strong>log in</strong>
                  </h4>
                  <br />
                  <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
                    <Form.Item label="Email">
                      {form.getFieldDecorator('email', {
                        rules: [
                          { pattern: emailRegex, message: 'Please enter a valid email' },
                          { required: true , message: 'Please input your email' }
                        ],
                      })(<Input size="default" placeholder="your email"/>)}
                    </Form.Item>
                    <Form.Item label="Password">
                      {form.getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password' }],
                      })(<Input size="default" type="password" />)}
                    </Form.Item>
                    <Form.Item>
                      {form.getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>Remember me</Checkbox>)}
                      <NavLink
                        to="/user/forgot"
                        className="utils__link--blue utils__link--underlined pull-right"
                      >
                        Forgot password?
                      </NavLink>
                    </Form.Item>
                    <div className="form-actions">
                      <Button
                        type="primary"
                        className="width-150 mr-4"
                        htmlType="submit"
                        loading={fetching}
                      >
                        Login
                      </Button>
                      <span className="ml-3 register-link">
                        <NavLink to="/user/signup"
                          className="text-primary utils__link--underlined"
                        >
                          Signup
                        </NavLink>{' '}
                        if you don&#39;t have account
                      </span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  login: payload => {
    dispatch(userActions.login(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
