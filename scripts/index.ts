import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { normalize } from "viem/ens";

const client = createPublicClient({
    chain: mainnet,
    transport: http(),
});

async function main() {
    const name = process.argv[2];

    if (!name) {
        console.error("Please provide a name. Usage: npx tsx index.ts <name>");
        process.exit(1);
    }

    try {
        console.log(`Looking up ${name}...`);
        const address = await client.getEnsAddress({
            name: normalize(name),
        });

        if (!address) {
            console.log(`Address not found for ${name}`);
            return;
        }

        console.log(`Address for ${name}: ${address}`);
    } catch (error) {
        console.error(`Error looking up ${name}:`, error);
    }
}

main();