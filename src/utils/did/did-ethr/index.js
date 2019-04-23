/* import Web3 from web3
import DidRegistryContract from './contract'
import ethutil from "ethereumjs-util"
import sha3 from ("js-sha3").keccak_256

const networkId = 4 // Rinkeby
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/MIY5d592BKY8caiAK2TJ'));

const leftPad = (data, size = 64) => {
    if (data.length === size) return data;
    return "0".repeat(size - data.length) + data;
}

const stripHexPrefix = (str) => {
    if (str.startsWith("0x")) {
      return str.slice(2);
    }
    return str;
}

const signData = async (identity, signer, key, data) => {
    //identity: funding address
    //signer: actual address

    const nonce = await didReg.nonce(signer);
    const paddedNonce = leftPad(Buffer.from([nonce], 64).toString("hex"));
    const dataToSign =
      "1900" +
      stripHexPrefix(didReg.address) +
      paddedNonce +
      stripHexPrefix(identity) +
      data;
    const hash = Buffer.from(sha3.buffer(Buffer.from(dataToSign, "hex")));
    const signature = ethutil.ecsign(hash, key);
    
    return {
      r: "0x" + signature.r.toString("hex"),
      s: "0x" + signature.s.toString("hex"),
      v: signature.v
    };
  }

export default keystore => {
    let address  = DidRegistryContract.networks[networkId].address;
    let abi = DidRegistryContract.abi

    let DidReg = web3.eth.contract(abi)
    let didReg = DidReg.at(address)
    const DidReg = new web3.eth.Contract(
        abi,
        address, {
        defaultAccount: keystore.address,
        defaultGasPrice: '3000000'
    });

}


 */