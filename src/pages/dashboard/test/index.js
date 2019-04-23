import React, { Component, Fragment } from 'react'
import { Avatar, Card, Col, Row, Menu, Dropdown, Icon } from 'antd';
import ipfsc from '../../../utils/ipfsc';
import { connect } from 'react-redux'

const { Meta } = Card;



class Test extends Component {

  render() {

    const { keystore } = this.props

    ipfsc.ls(`/${keystore.address}`, (err, files) => {
      err ? console.log(err) : console.log(files)
    })

    return(
        <Fragment>
            <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
                avatar={<Avatar shape="square" src="https://image.flaticon.com/icons/svg/660/660731.svg" />}
                title="Photos"
                description="16 MB"
            />
            </Card>

            <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
                avatar={<Avatar shape="square" src="https://image.flaticon.com/icons/svg/660/660731.svg" />}
                title="Photos"
                description="16 MB"
            />
            </Card>
      </Fragment>
    )
    
  }
}

const mapStateToProps = state => ({
  keystore: state.user.keystore
})

export default connect(mapStateToProps, null)(Test)