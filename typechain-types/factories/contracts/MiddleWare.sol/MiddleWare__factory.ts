/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MiddleWare,
  MiddleWareInterface,
} from "../../../contracts/MiddleWare.sol/MiddleWare";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "doNftAddressArray",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "oNftIdArray",
        type: "uint256[]",
      },
    ],
    name: "batchGetDoNftIdByONftId",
    outputs: [
      {
        internalType: "uint256[]",
        name: "doNftIdArray",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "operators",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "erc721Array",
        type: "address[]",
      },
    ],
    name: "batchIsApprovedForAll",
    outputs: [
      {
        internalType: "bool[]",
        name: "results",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "marketAddr",
        type: "address",
      },
    ],
    name: "getDoNftMarketInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "originalNftId",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "orderPricePerDay",
            type: "uint128",
          },
          {
            internalType: "uint64",
            name: "startTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "endTime",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "orderCreateTime",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "orderMinDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "orderMaxEndTime",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "orderFee",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "orderIsValid",
            type: "bool",
          },
          {
            internalType: "address",
            name: "originalNftAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "orderPrivateRenter",
            type: "address",
          },
          {
            internalType: "address",
            name: "orderPaymentToken",
            type: "address",
          },
        ],
        internalType: "struct MiddleWare.DoNftMarketInfo",
        name: "doNftInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "getNftOwner",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "getNftOwnerAndTokenURI",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "originalNftAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "orginalNftId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "doNftAddr",
        type: "address",
      },
    ],
    name: "getNftOwnerAndUser",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506116268061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063504461361461006757806363c7cb4f146100975780636a499bb4146100b7578063859c0e39146100d75780638709afd91461010a578063c3f8794f1461012a575b600080fd5b61007a610075366004610d27565b61014b565b6040516001600160a01b0390911681526020015b60405180910390f35b6100aa6100a5366004610d9e565b6101c0565b60405161008e9190610e24565b6100ca6100c5366004610e69565b610311565b60405161008e9190610eab565b6100ea6100e5366004610e69565b6109cf565b604080516001600160a01b0393841681529290911660208301520161008e565b61011d610118366004611023565b610ab4565b60405161008e9190611092565b61013d610138366004610d27565b610c28565b60405161008e9291906110ee565b6040516331a9108f60e11b81526004810182905260009083906001600160a01b03821690636352211e90602401602060405180830381865afa9250505080156101b1575060408051601f3d908101601f191682019092526101ae91810190611140565b60015b156101b95791505b5092915050565b6060816001600160401b038111156101da576101da611164565b604051908082528060200260200182016040528015610203578160200160208202803683370190505b50905060005b82811015610307578383828181106102235761022361117a565b90506020020160208101906102389190611190565b6001600160a01b031663e985e9c5888888858181106102595761025961117a565b905060200201602081019061026e9190611190565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381865afa1580156102b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102dd91906111ad565b8282815181106102ef576102ef61117a565b91151560209283029190910190910152600101610209565b5095945050505050565b604080516101e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081019190915260008490506000839050816001600160a01b03166325cb25b06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f69190611140565b8361014001906001600160a01b031690816001600160a01b031681525050816001600160a01b031663820bdcdc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610452573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047691906111cf565b816001600160a01b031663ced72f876040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d891906111cf565b6104e291906111e8565b63ffffffff1660e0840152604051634f558e7960e01b8152600481018690526001600160a01b03831690634f558e7990602401602060405180830381865afa158015610532573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055691906111ad565b156109c6576000806000846001600160a01b03166352332ed8896040518263ffffffff1660e01b815260040161058e91815260200190565b600060405180830381865afa1580156105ab573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105d39190810190611315565b506040516331a9108f60e11b8152600481018d90529396509094509250506001600160a01b03861690636352211e90602401602060405180830381865afa158015610622573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106469190611140565b6001600160a01b0390811661016088015283875260405163b0467deb60e01b8152600481018590529086169063b0467deb90602401602060405180830381865afa158015610698573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bc9190611140565b6001600160a01b0316610180870152815182906000906106de576106de61117a565b60209081029190910101516001600160401b031660408701528051819060009061070a5761070a61117a565b60209081029190910101516001600160401b0316606087015260405163a18087fd60e01b81526001600160a01b038a81166004830152602482018a905285169063a18087fd90604401602060405180830381865afa158015610770573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079491906111ad565b1580156101208801526109c257604051630430e70560e41b81526001600160a01b038a81166004830152602482018a90526000919086169063430e70509060440161012060405180830381865afa1580156107f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610817919061143b565b604051632572547560e01b81526001600160a01b038c81166004830152602482018c90529192506000918716906325725475906044016040805180830381865afa158015610869573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088d91906114ed565b905060018260e0015160028111156108a7576108a7611546565b14806108c8575060028260e0015160028111156108c6576108c6611546565b145b1561094e57604051634a5eda2160e11b81526001600160a01b038c81166004830152602482018c90528716906394bdb44290604401602060405180830381865afa15801561091a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093e9190611140565b6001600160a01b03166101a08901525b8160e00151600281111561096457610964611546565b60ff1661010089015260808083015163ffffffff90811660a0808c01919091526060850151821660c08c015290930151909216918801919091526020818101516001600160801b031690880152516001600160a01b03166101c08701525b5050505b50509392505050565b6040516331a9108f60e11b8152600481018390526000908190839086906001600160a01b03821690636352211e90602401602060405180830381865afa925050508015610a39575060408051601f3d908101601f19168201909252610a3691810190611140565b60015b15610a415793505b60405163b0467deb60e01b8152600481018790526001600160a01b0383169063b0467deb90602401602060405180830381865afa925050508015610aa2575060408051601f3d908101601f19168201909252610a9f91810190611140565b60015b15610aaa5792505b5050935093915050565b6060838214610afe5760405162461bcd60e51b8152602060048201526012602482015271696e76616c696420696e707574206461746160701b604482015260640160405180910390fd5b836001600160401b03811115610b1657610b16611164565b604051908082528060200260200182016040528015610b3f578160200160208202803683370190505b50905060005b84811015610c1f57858582818110610b5f57610b5f61117a565b9050602002016020810190610b749190611190565b6001600160a01b0316633ed189cf858584818110610b9457610b9461117a565b905060200201356040518263ffffffff1660e01b8152600401610bb991815260200190565b602060405180830381865afa158015610bd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfa91906111cf565b828281518110610c0c57610c0c61117a565b6020908102919091010152600101610b45565b50949350505050565b6040516331a9108f60e11b81526004810182905260009060609084906001600160a01b03821690636352211e90602401602060405180830381865afa925050508015610c91575060408051601f3d908101601f19168201909252610c8e91810190611140565b60015b15610c995792505b60405163c87b56dd60e01b8152600481018590526001600160a01b0382169063c87b56dd90602401600060405180830381865afa925050508015610cff57506040513d6000823e601f3d908101601f19168201604052610cfc919081019061155c565b60015b15610d075791505b509250929050565b6001600160a01b0381168114610d2457600080fd5b50565b60008060408385031215610d3a57600080fd5b8235610d4581610d0f565b946020939093013593505050565b60008083601f840112610d6557600080fd5b5081356001600160401b03811115610d7c57600080fd5b6020830191508360208260051b8501011115610d9757600080fd5b9250929050565b600080600080600060608688031215610db657600080fd5b8535610dc181610d0f565b945060208601356001600160401b03811115610ddc57600080fd5b610de888828901610d53565b90955093505060408601356001600160401b03811115610e0757600080fd5b610e1388828901610d53565b969995985093965092949392505050565b602080825282518282018190526000918401906040840190835b81811015610e5e5783511515835260209384019390920191600101610e3e565b509095945050505050565b600080600060608486031215610e7e57600080fd5b8335610e8981610d0f565b9250602084013591506040840135610ea081610d0f565b809150509250925092565b815181526020808301516101e0830191610ecf908401826001600160801b03169052565b506040830151610eea60408401826001600160401b03169052565b506060830151610f0560608401826001600160401b03169052565b506080830151610f1d608084018263ffffffff169052565b5060a0830151610f3560a084018263ffffffff169052565b5060c0830151610f4d60c084018263ffffffff169052565b5060e0830151610f6560e084018263ffffffff169052565b50610100830151610f7c61010084018260ff169052565b50610120830151610f9261012084018215159052565b50610140830151610faf6101408401826001600160a01b03169052565b50610160830151610fcc6101608401826001600160a01b03169052565b50610180830151610fe96101808401826001600160a01b03169052565b506101a08301516110066101a08401826001600160a01b03169052565b506101c08301516101b96101c08401826001600160a01b03169052565b6000806000806040858703121561103957600080fd5b84356001600160401b0381111561104f57600080fd5b61105b87828801610d53565b90955093505060208501356001600160401b0381111561107a57600080fd5b61108687828801610d53565b95989497509550505050565b602080825282518282018190526000918401906040840190835b81811015610e5e5783518352602093840193909201916001016110ac565b60005b838110156110e55781810151838201526020016110cd565b50506000910152565b60018060a01b0383168152604060208201526000825180604084015261111b8160608501602087016110ca565b601f01601f1916919091016060019392505050565b805161113b81610d0f565b919050565b60006020828403121561115257600080fd5b815161115d81610d0f565b9392505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000602082840312156111a257600080fd5b813561115d81610d0f565b6000602082840312156111bf57600080fd5b8151801515811461115d57600080fd5b6000602082840312156111e157600080fd5b5051919050565b63ffffffff818116838216019081111561121257634e487b7160e01b600052601160045260246000fd5b92915050565b60405161012081016001600160401b038111828210171561123b5761123b611164565b60405290565b604051601f8201601f191681016001600160401b038111828210171561126957611269611164565b604052919050565b60006001600160401b0382111561128a5761128a611164565b5060051b60200190565b80516001600160401b038116811461113b57600080fd5b600082601f8301126112bc57600080fd5b81516112cf6112ca82611271565b611241565b8082825260208201915060208360051b8601019250858311156112f157600080fd5b602085015b838110156103075761130781611294565b8352602092830192016112f6565b600080600080600060a0868803121561132d57600080fd5b855160208701519095506001600160401b0381111561134b57600080fd5b8601601f8101881361135c57600080fd5b805161136a6112ca82611271565b8082825260208201915060208360051b85010192508a83111561138c57600080fd5b6020840193505b828410156113ae578351825260209384019390910190611393565b8097505050505060408601516001600160401b038111156113ce57600080fd5b6113da888289016112ab565b93505060608601516001600160401b038111156113f657600080fd5b611402888289016112ab565b92505061141160808701611294565b90509295509295909350565b80516003811061113b57600080fd5b80516001811061113b57600080fd5b600061012082840312801561144f57600080fd5b50611458611218565b61146183611130565b815261146f60208401611130565b60208201526040838101519082015261148a60608401611294565b606082015261149b60808401611294565b60808201526114ac60a08401611294565b60a08201526114bd60c08401611294565b60c08201526114ce60e0840161141d565b60e08201526114e0610100840161142c565b6101008201529392505050565b6000604082840312801561150057600080fd5b50604080519081016001600160401b038111828210171561152357611523611164565b604052825161153181610d0f565b81526020928301519281019290925250919050565b634e487b7160e01b600052602160045260246000fd5b60006020828403121561156e57600080fd5b81516001600160401b0381111561158457600080fd5b8201601f8101841361159557600080fd5b80516001600160401b038111156115ae576115ae611164565b6115c1601f8201601f1916602001611241565b8181528560208385010111156115d657600080fd5b6115e78260208301602086016110ca565b9594505050505056fea264697066735822122046e1e6fcaa8587cdceb3618fc4d1a3e8d17ba6b16bb588a2e94ab0645743782e64736f6c634300081c0033";

type MiddleWareConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MiddleWareConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MiddleWare__factory extends ContractFactory {
  constructor(...args: MiddleWareConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MiddleWare & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MiddleWare__factory {
    return super.connect(runner) as MiddleWare__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MiddleWareInterface {
    return new Interface(_abi) as MiddleWareInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MiddleWare {
    return new Contract(address, _abi, runner) as unknown as MiddleWare;
  }
}