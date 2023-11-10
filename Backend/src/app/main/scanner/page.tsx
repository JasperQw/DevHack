"use client";

import NavbarWithAvatar from "@/app/(components)/NavbarWithAvatar";
import Html5QrcodePlugin from "../(components)/QRcodeScanning";
import { useState } from "react";
import SuccessScan from "./(components)/SuccessScan";

export default function Scanner() {
  const [showScanner, setShowScanner] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [addPointStatus, setAddPointStatus] = useState<boolean>(false);
  const onNewScanResult = async (decodedText: any, decodedResult: any) => {
    try {
      console.log(decodedText);
      setLoading(true);
      setShowScanner(false);
      const req = await fetch("/api/add_points");
      const res = await req.json();

      if (res.status === 200) {
        setAddPointStatus(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <NavbarWithAvatar />
      <div className="h-full w-full flex flex-col justify-center items-center">
        {showScanner ? (
          <>
            <h1 className="text-2xl font-bold text-center py-4 pt-[80px]">
              Scan QR
            </h1>
            <div className="w-full h-[40rem]">
              <Html5QrcodePlugin
                fps={8}
                qrbox={150}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
              />
            </div>
          </>
        ) : loading ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : addPointStatus ? (
          <SuccessScan />
        ) : (
          "FAIL"
        )}
      </div>
    </>
  );
}
