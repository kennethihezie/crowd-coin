import web3 from './web3'

const contractAddress = '0x1f410C7A23b2bcFd32c22439Fbb626a2271075f7';

const abi: any = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minimumContribution",
          "type": "uint256"
        }
      ],
      "name": "deployContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllDeployedContracts",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

export default new web3.eth.Contract(abi, contractAddress)
