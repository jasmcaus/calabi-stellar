import "tsconfig-paths/register"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "@openzeppelin/hardhat-upgrades"
import "@typechain/hardhat"
import "hardhat-contract-sizer"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@withtally/tally-publish-dao"

import { useEnv } from "#/utils/env"
import { HardhatUserConfig } from "hardhat/types"
// import forkBlockNumber from "#/test/reserve/integration/fork-block-numbers"

// eslint-disable-next-line node/no-missing-require
// require("#/tasks")

const MAINNET_RPC_URL = useEnv(["MAINNET_RPC_URL", "ALCHEMY_MAINNET_RPC_URL"])
const TIMEOUT = 3_000_000

const GOERLI_RPC_URL = "https://eth-goerli.g.alchemy.com/v2/xG9WBRVaBuREV41VkoL2uX8jF8u15IOJ"
const PRIVATE_KEY = "95df1e4a9e6bdf92a8a8dc3d9859fe3d2401d78f310b49fc690aa4c2f6bb39c1"

const src_dir = `./contracts/${useEnv("PROTO")}`
const settings = { optimizer: { enabled: true, runs: 9999 } }

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        // hardhat: {
        //     // network for tests/in-process stuff
        //     forking: useEnv("FORK")
        //         ? {
        //               url: MAINNET_RPC_URL,
        //               blockNumber: Number(useEnv("MAINNET_BLOCK", forkBlockNumber["default"].toString())),
        //           }
        //         : undefined,
        //     gas: 0x1ffffffff,
        //     blockGasLimit: 0x1fffffffffffff,
        //     allowUnlimitedContractSize: true,
        //     mining: {
        //         auto: false,
        //         interval: 5000,
        //     },
        // },
        localhost: {
            // network for long-lived mainnet forks
            chainId: 1337,
            url: "http://localhost:8545",
            // gas: 0x1ffffffff,
            // blockGasLimit: 0x1fffffffffffff,
            allowUnlimitedContractSize: true,
        },
        goerli: {
            chainId: 5,
            url: GOERLI_RPC_URL,
            gasPrice: 3000000000, // 3 Gwei
            accounts: [PRIVATE_KEY],
        },
        deltaSaga: {
            chainId: 1687981848104343,
            url: "https://deltadefi-1687981848104343-1.jsonrpc.sp1.sagarpc.io",
            accounts: [PRIVATE_KEY],
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
                settings,
            },
            {
                version: "0.6.12",
                settings,
            },
            {
                version: "0.4.24",
                settings,
            },
        ],
        settings: {
            evmVersion: "istanbul",
            optimizer: {
                enabled: true,
                runs: 9999,
            },
        },
    },
    paths: {
        sources: src_dir,
        artifacts: "../src/abis",
    },
    mocha: {
        timeout: TIMEOUT,
        slow: 1000,
    },
    contractSizer: {
        alphaSort: false,
        disambiguatePaths: false,
        runOnCompile: false,
        strict: false,
        only: [],
        except: ["Extension"],
    },
    gasReporter: {
        enabled: !!useEnv("REPORT_GAS"),
    },
}

if (useEnv("ONLY_FAST")) {
    config.mocha!.grep = "/#fast/"
    config.mocha!.slow = 200
    config.gasReporter!.enabled = false
}

if (useEnv("JOBS")) {
    config.mocha!.parallel = true
    config.mocha!.jobs = Number(useEnv("JOBS"))
}

export default config
