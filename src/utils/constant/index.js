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



const RadenuContractAddress = "0x40fb4204dDe488f34b9d9E0056d0FE8f6ab38585"
const USDCTokenContractAddress = "0x5aCb077D92c3F87fd56ED0D14d24ffcec3298C4d"
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
