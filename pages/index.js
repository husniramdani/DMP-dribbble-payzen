import Head from "next/head";
import Link from "next/link";
import { Storefront, FileText, CreditCard } from "phosphor-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>PAYZEN</title>
      </Head>
      {/* header */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">Payzen</div>
        <div className="flex space-x-10">
          <Link href="/" className="text-sm">
            Prices
          </Link>
          <Link href="/" className="text-sm">
            Learn
          </Link>
          <Link href="/" className="text-sm">
            Individuals
          </Link>
          <Link href="/" className="text-sm">
            Business
          </Link>
          <Link href="/" className="text-sm">
            Developers
          </Link>
        </div>
        <div className="flex space-x-3 items-center">
          <button className="mr-5 font-semibold">
            Sign in
          </button>
          <button className="border text-green-500 border-green-300 px-6 py-2 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>

      {/* content */}
      <div className="flex items-center justify-between">
        <div className="w-6/12">
          <div className="flex mb-6">
            <div className="flex justify-center items-center h-14 w-14 rounded-full bg-white shadow-lg">
              <Storefront weight="light" size={36} className="text-blue-700" />
            </div>
            <div className="flex items-center text-3xl text-gray-300 overflow-hidden">
              ------------------------------------------
            </div>
          </div>

          <div className="flex items-center mb-3">
            <div className="text-7xl font-semibold">Operate</div>
            <span className="relative inline-flex ml-5">
              <button
                type="button"
                className="inline-flex items-center px-5 border-2 border-dashed text-7xl font-semibold text-green-500 transition ease-in-out duration-150 bg-green-50"
              >
                finance
              </button>
              <span className="flex absolute h-2 w-2 top-0 left-0 -mt-1 -ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="flex absolute h-2 w-2 bottom-0 left-0 -mb-1 -ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="flex absolute h-2 w-2 bottom-0 right-0 -mb-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </span>
          </div>

          <div className="text-7xl font-semibold mb-6">more efficiently</div>
          <div className="mb-6 text-xl w-11/12 leading-8 font-medium">
            Discover how specific <a href="#" className="text-blue-700 underline font-semibold">Cryptocurrencies</a> work and get a bit of
            each crypto to try out for yourself.
          </div>
          <div>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg mr-5 font-semibold">Free Trial</button>
            <button className="border-2 text-gray-700 border-gray-400 px-8 py-3 rounded-lg text-lg font-semibold">Enumerate Profit</button>
          </div>
        </div>
        <div className="w-6/12">
          <div className="-mr-28 mt-12">
            <img alt="X" src="/images/payzen-ct-1.png" className="w-full" />
          </div>
        </div>
      </div>
      <div className="flex w-full bg-white shadow-md rounded-md px-5 ">
        <div className="w-2/6 p-8">
          <p className="text-gray-800">JOURNEY WITH PAYZEN</p>
          <p className="text-3xl font-semibold">Payzen powers the cryptoeconomy</p>
        </div>
        <div className="w-2/6 p-8 flex space-x-5">
          <div>
            <div className="flex justify-center items-center h-14 w-14 rounded-full shadow-xl">
              <CreditCard size={28} className="text-blue-700" />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Use your card worldwide</p>
            <p className="text-gray-600">Ready to use in millions of locations around the world. PIN or withdraw cassh from any ATM.</p>
          </div>
        </div>
        <div className="w-2/6 p-8 flex space-x-5">
          <div>
            <div className="flex justify-center items-center h-14 w-14 rounded-full shadow-xl">
              <FileText size={28} className="text-green-500" />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">Digital collectibles</p>
            <p className="text-gray-600">World-class security as standard. Two-step verification, Instant card freeze and plenty more.</p>
          </div>
        </div>
      </div>
    </>
  );
}
