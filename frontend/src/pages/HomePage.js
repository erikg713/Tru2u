import React from 'react';
import WalletConnect from '../components/WalletConnect';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Tru 2 U</h1>
      <p>A dating site powered by Pi Network payments.</p>
      <WalletConnect />
    </div>
  );
}

export default HomePage;
