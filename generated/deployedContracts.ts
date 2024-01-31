import { bridge_abi } from "./bridge-abi";
import { erc20ABI } from "wagmi";


const contracts = {
  1: [
    {
      chainId: "1",
      name: "Ethereum",
      contracts: {
        Bridge: {
          address: "0x4060d5D726D435CF32899ac5c7f633Ff4c9feaD2",
          abi: bridge_abi
        },
        customToken: {
          address: "0x69a2AB99A6d9c077FEB98eFf5492F551C19aFF40",
          abi: erc20ABI
        },
      },
    },
  ],
  56: [
    {
      chainId: "56",
      name: "BNB Smart Chain",
      contracts: {
        Bridge: {
          address: "0x4060d5D726D435CF32899ac5c7f633Ff4c9feaD2",
          abi: bridge_abi
        },
        customToken: {
          address: "0xE5b940c20C45f6Ff42B061542865a5667A8A6A15",
          abi: erc20ABI
        },
      },
    },
  ],
  137: [
    {
      chainId: "137",
      name: "Polygon",
      contracts: {
        Bridge: {
          address: "0x4060d5D726D435CF32899ac5c7f633Ff4c9feaD2",
          abi: bridge_abi
        },
        customToken: {
          address: "0x69a2AB99A6d9c077FEB98eFf5492F551C19aFF40",
          abi: erc20ABI
        },
      },
    },
  ],

  //TOKEN



  
  //SAMPLE STRUCTURE
  // 31337: [
  //   {
  //     chainId: "31337",
  //     name: "localhost",
  //     contracts: {
  //       WETH9: {
  //         address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  //         abi: [
  //           {
  //             anonymous: false,
  //             inputs: [
  //               {
  //                 indexed: true,
  //                 internalType: "address",
  //                 name: "src",
  //                 type: "address",
  //               },
  //               {
  //                 indexed: true,
  //                 internalType: "address",
  //                 name: "guy",
  //                 type: "address",
  //               },
  //               {
  //                 indexed: false,
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "Approval",
  //             type: "event",
  //           },
  //           {
  //             anonymous: false,
  //             inputs: [
  //               {
  //                 indexed: true,
  //                 internalType: "address",
  //                 name: "dst",
  //                 type: "address",
  //               },
  //               {
  //                 indexed: false,
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "Deposit",
  //             type: "event",
  //           },
  //           {
  //             anonymous: false,
  //             inputs: [
  //               {
  //                 indexed: true,
  //                 internalType: "address",
  //                 name: "src",
  //                 type: "address",
  //               },
  //               {
  //                 indexed: true,
  //                 internalType: "address",
  //                 name: "dst",
  //                 type: "address",
  //               },
  //               {
  //                 indexed: false,
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "Transfer",
  //             type: "event",
  //           },
  //           {
  //             anonymous: false,
  //             inputs: [
  //               {
  //                 indexed: true,
  //                 internalType: "address",
  //                 name: "src",
  //                 type: "address",
  //               },
  //               {
  //                 indexed: false,
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "Withdrawal",
  //             type: "event",
  //           },
  //           {
  //             inputs: [
  //               {
  //                 internalType: "address",
  //                 name: "",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "",
  //                 type: "address",
  //               },
  //             ],
  //             name: "allowance",
  //             outputs: [
  //               {
  //                 internalType: "uint256",
  //                 name: "",
  //                 type: "uint256",
  //               },
  //             ],
  //             stateMutability: "view",
  //             type: "function",
  //           },
  //           {
  //             inputs: [
  //               {
  //                 internalType: "address",
  //                 name: "guy",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "approve",
  //             outputs: [
  //               {
  //                 internalType: "bool",
  //                 name: "",
  //                 type: "bool",
  //               },
  //             ],
  //             stateMutability: "nonpayable",
  //             type: "function",
  //           },
  //           {
  //             inputs: [
  //               {
  //                 internalType: "address",
  //                 name: "",
  //                 type: "address",
  //               },
  //             ],
  //             name: "balanceOf",
  //             outputs: [
  //               {
  //                 internalType: "uint256",
  //                 name: "",
  //                 type: "uint256",
  //               },
  //             ],
  //             stateMutability: "view",
  //             type: "function",
  //           },
  //           {
  //             inputs: [],
  //             name: "decimals",
  //             outputs: [
  //               {
  //                 internalType: "uint8",
  //                 name: "",
  //                 type: "uint8",
  //               },
  //             ],
  //             stateMutability: "view",
  //             type: "function",
  //           },
  //           {
  //             inputs: [],
  //             name: "deposit",
  //             outputs: [],
  //             stateMutability: "payable",
  //             type: "function",
  //           },
  //           {
  //             inputs: [],
  //             name: "name",
  //             outputs: [
  //               {
  //                 internalType: "string",
  //                 name: "",
  //                 type: "string",
  //               },
  //             ],
  //             stateMutability: "view",
  //             type: "function",
  //           },
  //           {
  //             inputs: [],
  //             name: "symbol",
  //             outputs: [
  //               {
  //                 internalType: "string",
  //                 name: "",
  //                 type: "string",
  //               },
  //             ],
  //             stateMutability: "view",
  //             type: "function",
  //           },
  //           {
  //             inputs: [],
  //             name: "totalSupply",
  //             outputs: [
  //               {
  //                 internalType: "uint256",
  //                 name: "",
  //                 type: "uint256",
  //               },
  //             ],
  //             stateMutability: "view",
  //             type: "function",
  //           },
  //           {
  //             inputs: [
  //               {
  //                 internalType: "address",
  //                 name: "dst",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "transfer",
  //             outputs: [
  //               {
  //                 internalType: "bool",
  //                 name: "",
  //                 type: "bool",
  //               },
  //             ],
  //             stateMutability: "nonpayable",
  //             type: "function",
  //           },
  //           {
  //             inputs: [
  //               {
  //                 internalType: "address",
  //                 name: "src",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "dst",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "transferFrom",
  //             outputs: [
  //               {
  //                 internalType: "bool",
  //                 name: "",
  //                 type: "bool",
  //               },
  //             ],
  //             stateMutability: "nonpayable",
  //             type: "function",
  //           },
  //           {
  //             inputs: [
  //               {
  //                 internalType: "uint256",
  //                 name: "wad",
  //                 type: "uint256",
  //               },
  //             ],
  //             name: "withdraw",
  //             outputs: [],
  //             stateMutability: "nonpayable",
  //             type: "function",
  //           },
  //           {
  //             stateMutability: "payable",
  //             type: "receive",
  //           },
  //         ],
  //       },
  //     },
  //   },
  // ],



 
} as const;

export default contracts;
