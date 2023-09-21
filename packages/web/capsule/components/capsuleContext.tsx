/* eslint-disable unicorn/filename-case */
import Capsule from "@usecapsule/web-sdk";
import React, {
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import CapsuleModalView from "~/capsule/components/CapsuleModel";

export type CapsuleAuthContextType = {
  capsule: any;
  isCapsuleWalletPresent: boolean;
  showCapsuleModal: boolean;
  setShowCapsuleModal: (v: boolean) => void;
};

const CapsuleAuthContext = React.createContext<CapsuleAuthContextType | null>(
  null
);

export function CapsuleAuthProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  // const {
  //   chainStore: {
  //     osmosis: { chainId },
  //   },
  //   accountStore,
  // } = useStore();

  // const wallet = accountStore?.getWallet(
  //   chainId
  // ) as unknown as CosmosCapsuleWallet;

  const [capsule, setCapsule] = useState<Capsule | undefined>();

  const isCapsuleWalletPresent =
    Object.keys(capsule?.getWallets() ?? {}).length > 0;

  const [showCapsuleModal, setShowCapsuleModal] = useState(false);

  useEffect(() => {
    import("@usecapsule/web-sdk").then((CapsuleModule) => {
      const Capsule = CapsuleModule.default;
      const instance = new Capsule(CapsuleModule.Environment.BETA, undefined, {
        offloadMPCComputationURL:
          "https://partner-mpc-computation.beta.usecapsule.com",
      });
      setCapsule(instance);
    });
  }, []);

  const value = {
    capsule: capsule,
    isCapsuleWalletPresent,
    showCapsuleModal,
    setShowCapsuleModal,
  };

  return (
    <CapsuleAuthContext.Provider value={value}>
      {children}
      <CapsuleModalView
        // wallet={wallet}
        setShowCapsuleModal={setShowCapsuleModal}
        showCapsuleModal={showCapsuleModal}
      />
    </CapsuleAuthContext.Provider>
  );
}

export function useCapsuleAuth() {
  return useContext(CapsuleAuthContext);
}
