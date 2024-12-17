import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SalesDistribution from './components/SalesDistribution';
import SalesOverview from './components/SalesOverview';
import RevenueUpdates from './components/RevenueUpdates';
import YearlySales from './components/YearlySales';
import ActiveUsers from './components/ActiveUsers';
import PaymentGateways from './components/PaymentGateways';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <SalesDistribution />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <SalesOverview />
            <RevenueUpdates />
            <YearlySales />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ActiveUsers />
            <PaymentGateways />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;