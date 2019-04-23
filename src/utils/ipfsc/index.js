const ipfsCrypto = require('ipfs-http-crypto')
const ipfsc = ipfsCrypto({ host: 'localhost', port: '5001', protocol: 'http' })

const keystore = (email, password) => {
    return ipfsc.generateBrainWallet(email+password)
}

const mkdir = (path, callback) => {
    ipfsc.files.mkdir(path, (err) => {
        callback(err)
    })
}

const write = (path, data, keystore, callback) => {
    ipfsc.files.write(path, data, { create: true, crypto: keystore }, (err) => {
        callback(err)
    })
}

const read = (path, keystore, callback) => {
    ipfsc.files.read(path, { crypto: keystore }, (err, buf) => {
        callback(err, buf)
    })
}

const ls = (path, callback) => {
    ipfsc.files.ls(path, { long: true, sort: true }, (err, files) => {
        callback(err, files)
    })
}

export default {
    keystore,
    mkdir,
    read,
    write,
    ls
}