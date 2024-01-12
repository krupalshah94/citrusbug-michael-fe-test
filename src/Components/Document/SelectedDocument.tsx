import React, { FC } from "react";

//Icon & Css
import backIcon from "../../Assets/Icons/back-icon.svg";
import "../../../src/styles/globals.css";

interface SelectedDocumentInterface {
  setSelectDocument: Function;
  selectedDocumentId: number | null;
}
const SelectedDocument: FC<SelectedDocumentInterface> = ({
  setSelectDocument,
  selectedDocumentId,
}) => {
  return (
    <div className="flex flex-col w-full p-4 border border-[#E5E7EB] rounded-lg mt-3 bg-[#E5E7EB] items-start  h-full min-h-[78vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <a
          href="javbascript:;"
          className="w-[56px] h-[64px] rounded-lg border border-[#E5E7EB] flex items-center justify-center"
          onClick={() => setSelectDocument(false)}
        >
          <img src={backIcon} alt="aero-icon" />
        </a>
        <p className="font-Inter font-semibold  text-[12px] leading-[18px] text-[#6B7280] text-center">
          Select documents from the left panel to have employees review them and
          provide a signature acknowledging review
        </p>
      </div>
    </div>
  );
};

export default SelectedDocument;
