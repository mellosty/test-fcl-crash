import * as fcl from "@onflow/fcl";

fcl
  .config()
  .put("flow.network", "testnet")
  .put("accessNode.api", "http://localhost:8888");

setInterval(async () => {
  console.log("Polling");
  try {
    const response = await fcl.query({
      cadence: `
        pub fun main(): Int {
          return 1 + 2
        }
      `,
    });
    console.log("Response: ", response);
  } catch (error) {
    console.warn(error);
  }
}, 1000);
