import Web3 from "web3"
import RadenuContractAbi from "./Radenu.json"
import RadenuTokenContractAbi from "./Token.json"

const { ethereum } = window

const web3 = new Web3(ethereum)

const networks = {
    testnet: {
        chainId: `0x${Number(9001).toString(16)}`,
        chainName: 'Evmos',
        nativeCurrency: {
            name: "Evmos",
            symbol: "Evmos",
            decimals: 18
        },
        rpcUrls: [
            "https://eth.bd.evmos.org:8545",
            "https://evmos-evm.publicnode.com"
        ],
        blockExplorerUrls: [
            'https://evm.evmos.org',
            'https://www.mintscan.io/evmos'
        ],
    }
}



const RadenuContractAddress = "0xC9b84e570b7dDb91AB07dD298951cEC868c2500b"
const USDCTokenContractAddress = "0x24980dFe830205C96d827875651ea42343103C68"
const orderState = ['INITIATED', 'ACCEPTED', 'COMPLETED', 'FUFILLED', 'CANCELLED', 'INDISPUTE']



export {
    web3,
    ethereum,
    networks,
    RadenuContractAddress,
    USDCTokenContractAddress,
    RadenuContractAbi,
    RadenuTokenContractAbi,
    orderState
}
