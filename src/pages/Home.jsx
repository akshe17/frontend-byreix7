import { useState } from "react";
import {
  Send,
  Wallet,
  Banknote,
  Receipt,
  TrendingUp,
  PiggyBank,
  Leaf,
  MoreHorizontal,
  HelpCircle,
} from "lucide-react";
import promoImage from "../assets/images/promotional.jpg"
import logo from "../assets/images/logo.jpg";
import HomeActions from "../components/HomeActions";
export default function Home() {
  const [activeTab, setActiveTab] = useState("Wallet");
  const [balance, setBalance] = useState(123456.78);
  const [savings, setSavings] = useState(31000.50);
  const [loan, setLoad] = useState(47000.00)
   const [grow, setGrow] = useState(75000.00)
  const [showModal, setShowModal] = useState(false);

  const actions = [
    { label: "Send", icon: <Send size={22} /> },
    { label: "Load", icon: <Wallet size={22} /> },
    { label: "Transfer", icon: <Banknote size={22} /> },
    { label: "Bills", icon: <Receipt size={22} /> },
    { label: "Borrow", icon: <TrendingUp size={22} /> },
    { label: "BSave", icon: <PiggyBank size={22} /> },
    { label: "BInvest", icon: <Leaf size={22} /> },
    { label: "View All", icon: <MoreHorizontal size={22} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-yellow-100 font-sans px-4 py-6 md:px-10 md:py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ByreiX Logo" className="w-12 h-12 rounded-lg" />
          <h1 className="text-3xl font-extrabold tracking-wide text-yellow-300">ByreiX</h1>
        </div>
        <button className="flex items-center gap-2 bg-yellow-300 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition">
          <HelpCircle size={18} /> HELP
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-around text-yellow-200 border-b border-yellow-800 pb-3 mb-6 text-sm md:text-base">
        {["Wallet", "Save", "Borrow", "Grow"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-medium transition ${
              activeTab === tab ? "text-yellow-400 border-b-2 border-yellow-400 pb-2" : "hover:text-yellow-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Wallet" && (
        <>
          {/* Balance Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
            <div className="mb-4 md:mb-0">
              <p className="text-xs text-yellow-500 tracking-widest">AVAILABLE BALANCE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-200 mt-1">
                ₱{balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </h2>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-900 text-yellow-100 px-6 py-3 rounded-md text-base font-semibold hover:bg-green-800 transition"
            >
              + Cash In
            </button>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-12 text-center">
            {actions.map((item) => (
              <HomeActions key={item.label} label={item.label} icon={item.icon} />
            ))}
          </div>

          
      {/* Explore Section */}
      <div className="bg-yellow-900/10 border border-yellow-800 rounded-2xl overflow-hidden shadow-lg md:flex md:items-center md:justify-between">
        <div className="p-6 md:p-10 md:w-2/3">
          <h3 className="text-yellow-300 font-semibold text-lg md:text-2xl">BYREIXWIFT</h3>
          <p className="text-yellow-500 text-sm italic mb-3">— YOU’RE A TAP AWAY —</p>
          <p className="text-yellow-100 font-medium text-lg mb-5 leading-relaxed">
            Enjoy worry-free payments with ByreiXwift, your one-tap digital wallet solution
            for effortless transfers and transactions.
          </p>
          <button className="bg-green-900 text-yellow-100 px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition">
            Tap to watch video
          </button>
        </div>
        <img src={promoImage} alt="Promo" className="w-full md:w-1/3 object-cover h-64 md:h-full" />
      </div>

        </>
      )}

      {activeTab === "Save" && (
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold text-yellow-300 mb-3">Savings Account</h2>
          <p className="text-yellow-500 mb-8">
            Build your future with flexible saving plans.
          </p>
          <div className="bg-yellow-900/10 border border-yellow-800 rounded-2xl p-6 md:p-10 max-w-xl mx-auto">
            <p className="text-yellow-100 text-lg mb-4">Total Savings:</p>
            <h3 className="text-4xl font-bold text-yellow-200 mb-6">₱ {savings}</h3>
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition">
              + Add to Savings
            </button>
          </div>
        </div>
      )}

      {activeTab === "Borrow" && (
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold text-yellow-300 mb-3">Loan Center</h2>
          <p className="text-yellow-500 mb-8">
            Get instant cash loans with low interest rates.
          </p>
          <div className="bg-yellow-900/10 border border-yellow-800 rounded-2xl p-6 md:p-10 max-w-xl mx-auto">
            <p className="text-yellow-100 text-lg mb-4">Eligible Loan Amount:</p>
            <h3 className="text-4xl font-bold text-yellow-200 mb-6">₱{loan}</h3>
            <button className="bg-green-900 text-yellow-100 px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition">
              Apply Now
            </button>
          </div>
        </div>
      )}

      {activeTab === "Grow" && (
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold text-yellow-300 mb-3">Investment Hub</h2>
          <p className="text-yellow-500 mb-8">
            Grow your money through smart investment plans.
          </p>
          <div className="bg-yellow-900/10 border border-yellow-800 rounded-2xl p-6 md:p-10 max-w-xl mx-auto">
            <p className="text-yellow-100 text-lg mb-4">Current Portfolio Value:</p>
            <h3 className="text-4xl font-bold text-yellow-200 mb-6">₱{grow}</h3>
            <button className="bg-green-900 text-yellow-100 px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition">
              Invest Now
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-xs text-yellow-600">
        © 2025 ByreiX. All rights reserved.
      </div>
    </div>
  );
}
