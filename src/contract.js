import { Web3 } from "web3";

document.getElementById("btn-login").onclick = getTransactions;

export const getTransactions = async () =>{
    console.log(await Web3.eth.getAccounts())
    const Contract = Web3.eth.Contract(token.abi, "walletAddress", {from: '0x3CA0FdaC79A84138dfC00DaA3Dfa1AfE0752EE4a', gas:5500000 } )
    console.log(Contract)

}

