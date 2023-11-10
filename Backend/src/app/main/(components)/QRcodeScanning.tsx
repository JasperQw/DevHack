// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.

const createConfig = (props: any) => {
  let config = {};
  if (props.fps) {
    // @ts-ignore
    config.fps = props.fps;
  }
  if (props.qrbox) {
    // @ts-ignore
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    // @ts-ignore
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    // @ts-ignore
    config.disableFlip = props.disableFlip;
  }
  return config;
};

const Html5QrcodePlugin = (props: any) => {
  const ref = useRef<Html5QrcodeScanner | null>(null);
  useEffect(() => {
    // when component mounts
    const config = createConfig(props);
    const verbose = props.verbose === true;
    // Suceess callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw "qrCodeSuccessCallback is required callback.";
    }

    if (ref.current === null) {
      ref.current = new Html5QrcodeScanner(
        qrcodeRegionId,
        // @ts-ignore
        config,
        verbose
      );
    }

    const html5QrcodeScanner = ref.current;

    setTimeout(() => {
      const container = document.getElementById(qrcodeRegionId);
      if (html5QrcodeScanner && container?.innerHTML == "") {
        html5QrcodeScanner.render(
          props.qrCodeSuccessCallback,
          props.qrCodeErrorCallback
        );
      }
    }, 0);

    // cleanup function when component will unmount
    return () => {
      if (html5QrcodeScanner) {
        html5QrcodeScanner.clear();
      }
    };
  }, []);

  return <div id={qrcodeRegionId} />;
};

export default Html5QrcodePlugin;
