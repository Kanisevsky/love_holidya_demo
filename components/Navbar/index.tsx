import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div>
      {/* TOP bar */}
      <div className="w-full py-3 bg-blue-700 text-white text-center font-bold">
        <Link href="/">
          <p>Tap here for our latest payday deals</p>
        </Link>
      </div>
      {/* main menu */}
      <div className="w-ful flex justify-around items-center bg-blue-600 py-3">
        {/* Logo box */}
        <div className="">
          <Link href="/">
            <Image src="./main-logo.svg" alt="" width={210} height={48}></Image>
          </Link>
        </div>
        {/* travel icon box */}
        <div className="flex items-center gap-3 text-white">
          <div className="flex items-center gap-2">
            <Image
              src="./atol_protected.svg"
              alt=""
              width={36}
              height={36}
              className=""
            ></Image>
            <Link href="/">ATOL Protected</Link>
          </div>
          <div className="flex items-center gap-2">
            <Image src="./cost.svg" alt="" width={36} height={36}></Image>
            <Link href="/">Unbeatable Price</Link>
          </div>
          <div className="flex items-center gap-2 pr-10 ">
            <Image
              src="./check.svg"
              alt=""
              width={36}
              height={36}
              className="fill-white"
            ></Image>
            <Link href="/">Spread the costs</Link>
          </div>
          <div className="flex items-center gap-4">
            <Image src="./favorite.svg" alt="" width={36} height={36}></Image>
            <Image src="./account.svg" alt="" width={36} height={36}></Image>
            <Image src="./hamburger.svg" alt="" width={36} height={36}></Image>
          </div>
        </div>
        {/* account and hamburger icon box */}
      </div>
    </div>
  );
}

export default Navbar;
