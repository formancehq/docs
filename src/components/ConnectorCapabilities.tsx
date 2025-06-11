import React from 'react';
import RawCapabilities from '@site/src/components/connector-capabilities.json';

export function Capabilities() {
  type BooleanCapabilityMap = Record<string, Record<string, boolean>>;
  const transformCapabilities = (input: CapabilityMap): BooleanCapabilityMap => {
    const result: BooleanCapabilityMap = {};
    
    for (const [provider, capabilityList] of Object.entries(input)) {
      if (provider === "dummypay") {
        continue;
      }
      result[provider] = {};
      for (const capability of capabilityList) {
        result[provider][capability] = true;
      }
    }
    
    return result;
  };

  const connectors = transformCapabilities(RawCapabilities);

  return (
    <table>
      <thead>
        <tr>
          <th>Connector</th>
          <th>Accounts Data Layer</th>
          <th>External Accounts Data Layer</th>
          <th>Accounts Balances Data Layer</th>
          <th>Transactions Data Layer</th>
          <th>Bank Account Creation</th>
          <th>Transfer Initiation</th>
          <th>Payout Initiation</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(connectors).map(([provider, connector]) => (
        <tr>
          <th>{provider}</th>
          <th>{connector.CAPABILITY_FETCH_ACCOUNTS ? '✅':'❌'}</th>
          <th>{connector.CAPABILITY_FETCH_EXTERNAL_ACCOUNTS ? '✅':'❌'}</th>
          <th>{connector.CAPABILITY_FETCH_BALANCES ? '✅':'❌'}</th>
          <th>{connector.CAPABILITY_FETCH_PAYMENTS ? '✅':'❌'}</th>
          <th>{connector.CAPABILITY_CREATE_BANK_ACCOUNT ? '✅':'❌'}</th>
          <th>{connector.CAPABILITY_CREATE_TRANSFER ? '✅':'❌'}</th>
          <th>{connector.CAPABILITY_CREATE_PAYOUT ? '✅':'❌'}</th>
        </tr>
        ))}
      </tbody>
    </table>
  );
}
