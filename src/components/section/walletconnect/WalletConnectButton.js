import React from "react";
import useAuth from "../../../hook/useAuth";
import useLoading from "../../../hook/useLoading";
import useWeb3 from "../../../hook/useWeb3";

function WalletConnectButton() {
  const { connectWallet } = useWeb3();
  const { setLoading } = useLoading();
  const { updateProfile } = useAuth();

  const onConnect = async () => {
    try {
      setLoading(true);
      const address = await connectWallet();
      if (address) {
        const data = {
          walletAddress: address,
        };

        const res = await updateProfile(data);
        console.log(res);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <button
      className="px-8 py-2 rounded-full mt-4 sm:mt-0 bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white"
      onClick={onConnect}
    >
      Connect
    </button>
  );
}

export default WalletConnectButton;
