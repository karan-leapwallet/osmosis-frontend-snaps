/* eslint-disable unicorn/filename-case */
import React, { useEffect, useState } from "react";

import { CosmosCapsuleWallet } from "~/capsule/main-wallet";

export let onShowPopup: (show: boolean) => void;

type xcom = {
  wallet: CosmosCapsuleWallet;
  showCapsuleModal: boolean;
  setShowCapsuleModal: (v: boolean) => void;
};

export default function CapsuleModalView({
  // wallet,
  setShowCapsuleModal,
  showCapsuleModal,
}: {
  // wallet: CosmosCapsuleWallet;
  showCapsuleModal: boolean;
  setShowCapsuleModal: (v: boolean) => void;
}) {
  const onShowPopup = (show: boolean) => { 
    setShowCapsuleModal(show);
  };

  const [rc, setrc] = useState<(x: xcom) => JSX.Element>();

  console.log(showCapsuleModal, onShowPopup, setrc);

  useEffect(() => {
    const fn = async () => {
      if (!rc && false) {
        // const CapsuleModalX = await import(
        //   "@usecapsule/web-sdk/dist/modal/CapsuleModal"
        // ).then((m) => m.CapsuleModal);
        // const capsule = await import("~/capsule/main-wallet").then(
        //   (m) => m.capsule
        // );
        // const renderComponent = ({
        //   wallet,
        //   showCapsuleModal,
        //   setShowCapsuleModal,
        // }: xcom) => (
        //   <CapsuleModalX
        //     //   theme={newTheme}
        //     capsule={wallet?.capsuleClient ?? capsule}
        //     isOpen={showCapsuleModal}
        //     onClose={function (): void {
        //       if (
        //         Object.values((wallet?.capsuleClient ?? capsule).getWallets())
        //           .length > 0
        //       ) {
        //         setShowCapsuleModal(false);
        //       }
        //     }}
        //     appName={"LEAP_WALLET"}
        //   />
        // );
        // setrc(renderComponent);
      }

      // if (!(await capsule.isSessionActive())) {
      //   if (wallet?.walletName === "leap-cosmos-capsule") {
      //     wallet?.disconnect();
      //     onShowPopup(true);
      //   }
      //   // Disconnect
      // }
    };
    fn();
  });

  return (
    <>
      {/* {!!rc ? (
        rc({
          setShowCapsuleModal: setShowCapsuleModal,
          showCapsuleModal: showCapsuleModal,
          wallet: wallet,
        })
      ) : (
        <></>
      )} */}
    </>
  );
}
