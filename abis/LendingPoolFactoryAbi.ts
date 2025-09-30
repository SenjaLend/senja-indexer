export const LendingPoolFactoryAbi = [
      { type: "constructor", inputs: [], stateMutability: "nonpayable" },
      {
        type: "function",
        name: "DEFAULT_ADMIN_ROLE",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "OWNER_ROLE",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "PAUSER_ROLE",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "UPGRADER_ROLE",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "WKAIA",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "addTokenDataStream",
        inputs: [
          { name: "_token", type: "address", internalType: "address" },
          { name: "_dataStream", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "createLendingPool",
        inputs: [
          { name: "collateralToken", type: "address", internalType: "address" },
          { name: "borrowToken", type: "address", internalType: "address" },
          { name: "ltv", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "getRoleAdmin",
        inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "grantRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "hasRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "initialize",
        inputs: [
          { name: "_isHealthy", type: "address", internalType: "address" },
          {
            name: "_lendingPoolDeployer",
            type: "address",
            internalType: "address",
          },
          { name: "_protocol", type: "address", internalType: "address" },
          {
            name: "_positionDeployer",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "isHealthy",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "lendingPoolDeployer",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "oftAddress",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "operator",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "pause",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "paused",
        inputs: [],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "poolCount",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "pools",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [
          { name: "collateralToken", type: "address", internalType: "address" },
          { name: "borrowToken", type: "address", internalType: "address" },
          {
            name: "lendingPoolAddress",
            type: "address",
            internalType: "address",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "positionDeployer",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "protocol",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "proxiableUUID",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "renounceRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "revokeRole",
        inputs: [
          { name: "role", type: "bytes32", internalType: "bytes32" },
          { name: "account", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setIsHealthy",
        inputs: [
          { name: "_isHealthy", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setLendingPoolDeployer",
        inputs: [
          {
            name: "_lendingPoolDeployer",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setOftAddress",
        inputs: [
          { name: "_token", type: "address", internalType: "address" },
          { name: "_oftAddress", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setOperator",
        inputs: [
          { name: "_operator", type: "address", internalType: "address" },
          { name: "_status", type: "bool", internalType: "bool" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setPositionDeployer",
        inputs: [
          {
            name: "_positionDeployer",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "setProtocol",
        inputs: [
          { name: "_protocol", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "supportsInterface",
        inputs: [
          { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "tokenDataStream",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "unpause",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "upgradeTo",
        inputs: [
          {
            name: "newImplementation",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "upgradeToAndCall",
        inputs: [
          {
            name: "newImplementation",
            type: "address",
            internalType: "address",
          },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "event",
        name: "AdminChanged",
        inputs: [
          {
            name: "previousAdmin",
            type: "address",
            indexed: false,
            internalType: "address",
          },
          {
            name: "newAdmin",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "BeaconUpgraded",
        inputs: [
          {
            name: "beacon",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Initialized",
        inputs: [
          {
            name: "version",
            type: "uint8",
            indexed: false,
            internalType: "uint8",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "IsHealthySet",
        inputs: [
          {
            name: "isHealthy",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "LendingPoolCreated",
        inputs: [
          {
            name: "collateralToken",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "borrowToken",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "lendingPool",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "ltv",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "LendingPoolDeployerSet",
        inputs: [
          {
            name: "lendingPoolDeployer",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "OftAddressSet",
        inputs: [
          {
            name: "token",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "oftAddress",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "OperatorSet",
        inputs: [
          {
            name: "operator",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "status",
            type: "bool",
            indexed: false,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Paused",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "PositionDeployerSet",
        inputs: [
          {
            name: "positionDeployer",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "ProtocolSet",
        inputs: [
          {
            name: "protocol",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "RoleAdminChanged",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "previousAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "newAdminRole",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "RoleGranted",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "RoleRevoked",
        inputs: [
          {
            name: "role",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "TokenDataStreamAdded",
        inputs: [
          {
            name: "token",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "dataStream",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Unpaused",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: false,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Upgraded",
        inputs: [
          {
            name: "implementation",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
    ] as const;
