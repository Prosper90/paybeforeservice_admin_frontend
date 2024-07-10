/* eslint-disable react/prop-types */
/** @format */

import {
  Txbalance,
  TxReedem,
  TxDownload,
  Txdate,
  TxiconIn,
  TxiconOut,
  Txstatus,
  Txtype,
} from "./Txcomp";

export default function Txhome({ windowWidth, data, setRedeemObj }) {
  return (
    <>
      {data?.map((item, idx) => (
        <div className="flex justify-between items-center mb-2" key={idx}>
          {/* tx icon and type */}
          <div className="flex justify-between items-center ">
            {/* Icon */}
            {item.type === "transaction" ? (
              <TxiconIn status={item.status} />
            ) : (
              <TxiconOut status={item.status} />
            )}
            {/* Type */}
            <div className="text-[#555] leading-[20px]">
              <Txtype txtype={item.type} />
              {windowWidth <= 768 && (
                <div className="text-xs text-[#555]">{item.dispute_id}</div>
              )}
              <Txdate date={item.createdAt} />
            </div>
          </div>

          {/* status */}
          {windowWidth > 768 && <Txstatus status={item.status} />}

          {/* Amount */}
          {windowWidth > 768 && (
            <div className="text-xs text-[#555]">{item.dispute_id}</div>
          )}

          {/* view more */}
          <TxReedem item={item} />
        </div>
      ))}
    </>
  );
}
