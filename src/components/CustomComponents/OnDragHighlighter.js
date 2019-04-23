import React, { Component } from 'react'
import ipfsc from '../../utils/ipfsc';
import { connect } from 'react-redux'
import fileReader from 'pull-file-reader'
import pull from 'pull-stream'

class OnDropHighlighter extends Component {
  
    handleDragOver = e => {
        e.preventDefault()
        document.getElementById("dropzone").style.background = "#C9DAFF"
    }

    handleDragEnter = e => {
        e.preventDefault()
        //document.getElementById("dropzone").style.background = "#00FFFFFF"
    }

    handleDragLeave = e => {
        e.preventDefault()
        //document.getElementById("dropzone").style.background = "#00FFFFFF"
    }

    handleDrop = e => {
        e.preventDefault()

        const { keystore } = this.props
        let files = e.dataTransfer.files;

        ipfsc.mkdir(`/${keystore.address}`, err => {
            pull(
                fileReader(files[0]),
                pull.collect(function (err, buffs) {
                    var contents = Buffer.concat(buffs)
                    
                    // contents is the contents of the entire file
                    
                    ipfsc.write(`/${keystore.address}/${files[0].name}`, contents.toString('utf8'), keystore, (err) => {
                        console.log(err)
                    })
                })
            )
        })
    }

  
    render() {

        let { children } = this.props 

        return (
        <div id="dropzone"
            onDragOver={e => this.handleDragOver(e)}
            onDragEnter={e => this.handleDragEnter(e)}
            onDragLeave={e => this.handleDragLeave(e)}
            onDrop={e => this.handleDrop(e)}
            >
            { children }
        </div>
        )
    }
}

const mapStateToProps = state => ({
    keystore: state.user.keystore,

})

export default connect(mapStateToProps, null)(OnDropHighlighter);