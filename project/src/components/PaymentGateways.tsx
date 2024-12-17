import React from 'react';
import { MoreHorizontal, Wallet, CreditCard } from 'lucide-react';

const PaymentCard = ({ icon: Icon, title, subtitle, amount }: any) => (
  <div className="flex items-center justify-between p-3 border-b last:border-b-0">
    <div className="flex items-center space-x-3">
      <div className="p-2 rounded-lg bg-gray-100">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="text-green-600 font-medium">{amount}</div>
    </div>
  </div>
);

export default function PaymentGateways() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Payment Gateways</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <PaymentCard
          icon={Wallet}
          title="Wallet"
          subtitle="Bill payment"
          amount="+$235"
        />
        <PaymentCard
          icon={CreditCard}
          title="Credit card"
          subtitle="Bill Payment"
          amount="+$2235"
        />
      </div>

      <button className="w-full mt-4 text-center text-indigo-600 hover:text-indigo-700 text-sm font-medium">
        View all transactions
      </button>
    </div>
  );
}