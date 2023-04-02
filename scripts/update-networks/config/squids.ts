export const squidTypes = ["archive", "balances", "explorer", "main", "stats"];

export const squidUrlTemplates: Record<string, (network: string) => string> = {
	balances: (network: string) => `https://squid.subsquid.io/${network}-balances/graphql`,
	explorer: (network: string) => `https://squid.subsquid.io/gs-explorer-${network}/graphql`,
	main: (network: string) => `https://squid.subsquid.io/gs-main-${network}/graphql`,
	stats: (network: string) => `https://squid.subsquid.io/gs-stats-${network}/graphql`
};

export const forceSquidUrl: Record<string, Record<string, string>> = {
	"kusama": {
		"stats": "https://squid.subsquid.io/chain-analytics-squid/v/kusama-multi-parallel-2-0/graphql"
	},
	"polkadot": {
		"stats": "https://squid.subsquid.io/chain-analytics-squid/v/polkadot-multi-parallel-2-0/graphql"
	}
};