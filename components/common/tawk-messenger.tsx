import React, { forwardRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const TawkMessenger = forwardRef((props, ref: React.Ref<TawkMessengerReact>) => {
  return (
    <div>
      <TawkMessengerReact
        propertyId="66477b0e981b6c564771c068"
        widgetId="1hu3jhd1j"
        ref={ref}
      />
    </div>
  );
});

TawkMessenger.displayName = "TawkMessenger";

export default TawkMessenger;