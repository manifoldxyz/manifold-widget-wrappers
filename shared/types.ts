import type widgetConfig from './config.json';

export enum EthereumNetwork {
  MAINNET = 1,
  RINKEBY = 4,
  GOERLI = 5,
  OPTIMISM = 10,
  MATIC = 137,
  ARBITRUM = 42161,
  MUMBAI = 80001,
}

export enum DelayAuth {
  false = 'false',
  true = 'true',
  always = 'always',
}

export enum OAuthGrantType {
  TOKEN = 'token',
  SIGNATURE = 'signature',
}

export type ConnectWidgetDataAttributes = {
  showBalance?: boolean;
  alwaysOpen: boolean;
  connectWalletImage?: string;
  showChain?: boolean;
  avatar?: string;
  multi?: boolean;
  minimal?: boolean;
  fallbackProvider: string;
  network?: EthereumNetwork;
  parentFrameURL?: string;
  autoReconnect?: boolean;
  overrideConnectText?: string;
  strictAuth?: boolean;
  delayAuth?: DelayAuth;
  clientId: string;
  appName: string;
  grantType?: OAuthGrantType;
  detectApp?: boolean;
  message?: string;
};

export type MarketplaceWidgetType =
  | 'm-listing-attributes'
  | 'm-card-catalog'
  | 'm-layout-complete-listing'
  | 'm-layout-bid-overlay'
  | 'm-listing-countdown'
  | 'm-card-countdown'
  | 'm-card-ad'
  | 'm-listing-description'
  | 'm-layout-details-display'
  | 'm-listing-image-expandable'
  | 'm-listing-bid-form'
  | 'm-bid-subscribe-popup'
  | 'm-listing-inventory'
  | 'm-listing-links'
  | 'm-listing-minted-counter'
  | 'm-listing-name'
  | 'm-listing-price'
  | 'm-listing-bid-form-rich'
  | 'm-scheme-toggle'
  | 'm-listing-interactions';

export type MarketplaceWidgetDataAttributes = {
  widget: MarketplaceWidgetType;
  /** listing id */
  id: string;
  version: string;
  /** listing's custodial contract address */
  address?: string;
  network: EthereumNetwork;
  /** server-side id for overrides */
  assetIdOverride?: string;
  fallbackProvider?: string;
  merkleTreeCampaignId?: number;
  allowListFile?: string;
  allowListFileNoValues: string;
  referralAddress?: string;
  maxPerPurchase?: number;
  biddingStartsAtOverride?: string;
  minimumBidTextOverride?: string;
  currentBidTextOverride?: string;
  winningBidTextOverride?: string;
  identityVerifierMessageOverride: string;
  viewLinkPlatform: string;
  /**
   * (optional) identifier for the widget that replaces a `data-widget` div.
   * a widget that has its widgetKey set emits the MARKETPLACE_WIDGET_INJECTED
   * event on mount.
   * if widgetKey is undefined, the widget will not emit widget events.
   */
  widgetKey?: string;
  emitsIdentityVerify?: boolean;
  displayOnly?: boolean;
};

export const MMarketplaceOptions = {
  /** listing id */
  id: {
    type: String,
    required: true,
    default: '',
  },
  /** listing's custodial contract address */
  address: {
    type: String,
    default: '',
  },
  network: {
    type: Number,
    default: EthereumNetwork.MAINNET,
  },
  version: {
    type: Number,
    default: 2,
  },
  /** server-side id for overrides */
  assetIdOverride: {
    type: String,
    default: '',
  },
  fallbackProvider: {
    type: String,
    default: undefined,
    required: false,
  },
  merkleTreeCampaignId: {
    type: Number,
    required: false,
    default: 0,
  },
  allowListFile: {
    type: String,
    required: false,
    default: '',
  },
  allowListFileNoValues: {
    type: String,
    required: false,
    default: '',
  },
  referralAddress: {
    type: String,
    required: false,
    default: '',
  },
  maxPerPurchase: {
    type: Number,
    required: false,
    default: 1,
  },
  // Props for widget text overrides
  biddingStartsAtOverride: {
    type: String,
    required: false,
    default: '',
  },
  minimumBidTextOverride: {
    type: String,
    required: false,
    default: '',
  },
  currentBidTextOverride: {
    type: String,
    required: false,
    default: '',
  },
  winningBidTextOverride: {
    type: String,
    required: false,
    default: '',
  },
  viewLinkPlatform: {
    type: String,
    required: false,
    default: 'opensea',
  },
  // Props for error message overrides
  identityVerifierMessageOverride: {
    type: String,
    required: false,
    default: '',
  },
  /**
   * (optional) identifier for the widget that replaces a `data-widget` div.
   * a widget that has its widgetKey set emits the MARKETPLACE_WIDGET_INJECTED
   * event on mount.
   * if widgetKey is undefined, the widget will not emit widget events.
   */
  widgetKey: {
    type: String,
    required: false,
    default: '',
  },
  /**
   * if true, defers to an external window event on identity verification requested.
   */
  emitsIdentityVerify: {
    type: Boolean,
    default: false,
  },
  displayOnly: {
    type: Boolean,
    default: false,
  },
} as const;

export type CurationWidgetDataAttributes = {
  fallbackProvider: string;
  network: number;
  parentFrameUrl: string;
  clientId: string;
  appName: string;
  grantType: string;
  detectApp: boolean;
  curationId: string;
  appearance: string;
  curatorAddress: string;
};

export const MCurationOptions = {
  fallbackProvider: {
    type: String,
  },
  network: {
    type: Number,
  },
  parentFrameUrl: {
    type: String,
  },
  clientId: {
    type: String,
    default: '',
  },
  appName: {
    type: String,
    default: '',
  },
  grantType: {
    type: String,
    default: OAuthGrantType.SIGNATURE,
  },
  detectApp: {
    type: Boolean,
    default: false,
  },
  curationId: {
    type: String,
    required: true,
  },
  appearance: {
    type: String,
    default: 'system',
  },
  curatorAddress: {
    type: String,
    required: true,
  },
};

export type RestrictedTokenWidgetDataAttributes = {
  address: string;
};

export type WalletIdentityWidgetDataAttributes = {
  wallet: string;
};

export type WidgetType = keyof typeof widgetConfig;
