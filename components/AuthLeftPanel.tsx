import Image from "next/image";
import React from "react";

const AuthLeftPanel = () => {
  return (
    <div className="bg-neutral-200 hidden md:flex  md:w-2/5 ">
      <div className="mx-auto w-2/3 text-start my-60">
        <Image
          src="/bidcart-logo.webp"
          alt="bidcart-logo"
          width={200}
          height={150}
        />
        <div className=" mx-2 md:mx-3 my-6">
          <h1 className="text-2xl lg:text-4xl font-semibold ">Buy or Sell.</h1>
          <h2 className="text-2xl lg:text-4xl font-semibold">Almost anything</h2>
        </div>
        <Image src="/auth-image.png" alt="auth-image" width={500} height={500}/>
      </div>
    </div>
  );
};

export default AuthLeftPanel;
