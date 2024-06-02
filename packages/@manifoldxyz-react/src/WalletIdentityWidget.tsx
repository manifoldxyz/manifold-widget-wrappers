import React from 'react';
import { WalletIdentityWidgetDataAttributes } from './shared/types';
import { Widget } from './Widget';

export const WalletIdentityWidget: React.FC<
  { version: string } & WalletIdentityWidgetDataAttributes
> = ({ version, ...props }) => {
  return (
    <Widget
      widgetType="walletIdentity"
      version={version}
      dataAttributes={{
        ...props,
        widget: 'm-wallet-identity',
      }}
    ></Widget>
  );
};
