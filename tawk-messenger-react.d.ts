// tawk-messenger-react.d.ts
declare module '@tawk.to/tawk-messenger-react' {
  import * as React from 'react';

  interface TawkMessengerReactProps {
    propertyId: string;
    widgetId: string;
  }

  class TawkMessengerReact extends React.Component<TawkMessengerReactProps> {}
  
  export default TawkMessengerReact;
}