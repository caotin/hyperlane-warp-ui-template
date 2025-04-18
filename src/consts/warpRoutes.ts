import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'basesepolia',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Token',
      addressOrDenom: '0xc7FeC79b35FEe7227529616bA4F23d264bE2EB8e',
      collateralAddressOrDenom: '0xe663BAc505122C9166163Dbcc09427872a2Ed64a',
      connections: [{ token: 'ethereum|xeneatestnet|0xbB509861f899a3A7153bFDd2b9Fc840F147150e7' }],
    },
    {
      chainName: 'xeneatestnet',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Token',
      addressOrDenom: '0xbB509861f899a3A7153bFDd2b9Fc840F147150e7',
      connections: [{ token: 'ethereum|basesepolia|0xc7FeC79b35FEe7227529616bA4F23d264bE2EB8e' }],
    },
    {
      chainName: 'polygonamoy',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Token',
      addressOrDenom: '0xA0B91c800bD626b1A119cE3f6B286abFA25abD54',
      collateralAddressOrDenom: '0x46B4CAbB021b5f2042fDDF78BD740fEfe805F34C',
      connections: [{ token: 'ethereum|xeneatestnet|0x9f9e7528f9784964e340a3d43DB94C5B1453838E' }],
    },
    {
      chainName: 'xeneatestnet',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Token',
      addressOrDenom: '0x9f9e7528f9784964e340a3d43DB94C5B1453838E',
      connections: [{ token: 'ethereum|polygonamoy|0xA0B91c800bD626b1A119cE3f6B286abFA25abD54' }],
    },
  ],
  options: {},
};
 