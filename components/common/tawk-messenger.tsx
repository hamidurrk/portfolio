import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// The Tawk widget is ~100 kB+ of third-party script. Load it only when the
// browser is idle (or when someone asks to open the chat), and only once.
const TawkMessengerReact = dynamic(
  () => import("@tawk.to/tawk-messenger-react"),
  { ssr: false }
) as any;

type TawkApi = { maximize?: () => void };
const getApi = (): TawkApi | undefined =>
  (window as unknown as { Tawk_API?: TawkApi }).Tawk_API;

let openRequested = false;
let mountNow: (() => void) | null = null;

/** Open the chat window, loading the widget first if needed. */
export const openChat = (): void => {
  const api = getApi();
  if (api && typeof api.maximize === "function") {
    api.maximize();
    return;
  }
  openRequested = true;
  if (mountNow) mountNow();
};

const TawkMessenger = () => {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    mountNow = () => setShouldMount(true);
    const w = window as any;
    let handle: number;
    if (typeof w.requestIdleCallback === "function") {
      handle = w.requestIdleCallback(() => setShouldMount(true), { timeout: 6000 });
    } else {
      handle = window.setTimeout(() => setShouldMount(true), 4000);
    }
    return () => {
      mountNow = null;
      if (typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(handle);
      else clearTimeout(handle);
    };
  }, []);

  if (!shouldMount) return null;

  return (
    <TawkMessengerReact
      propertyId="66477b0e981b6c564771c068"
      widgetId="1hu3jhd1j"
      onLoad={() => {
        if (openRequested) {
          openRequested = false;
          getApi()?.maximize?.();
        }
      }}
    />
  );
};

export default TawkMessenger;
