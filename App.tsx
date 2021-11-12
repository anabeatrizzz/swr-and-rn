import React from 'react';
import Stack from './routes/Stack';
import { SWRConfig } from 'swr'

export default function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        revalidateIfStale: true,
        focusThrottleInterval: 5000
      }}
    >
      <Stack />
    </SWRConfig>
  );
};
