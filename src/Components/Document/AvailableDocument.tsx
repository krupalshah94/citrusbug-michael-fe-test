import React, { ChangeEvent, useState } from "react";

// Third party
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

// Custom Component
import SelectedDocument from "./SelectedDocument";

import DocumentDataType, { DocumentType } from "../../types/DocumentDataType";
import { documentsData } from "../../services/documentData";

//Icon & Css
import aeroIcon from "../../Assets/Icons/Icon.svg";
import searchIcon from "../../Assets/Icons/search.svg";
import "../../../src/styles/globals.css";

const AvailableDocument = () => {
  const [documents, setDocuments] = useState(documentsData);
  const [selectDocument, setSelectDocument] = useState<boolean>(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState<number | null>(
    null
  );
  const [, setSearchDocument] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchDocument(term);

    const filteredResult = documentsData.filter((item) =>
      item.categoryName.toLowerCase().includes(term)
    );

    setDocuments(filteredResult);
  };

  return (
    <>
      <div className="box-border h-full  w-full flex items-center justify-center bg-[#fff] py-5 lg:px-[50px] lg:py-11">
        <div className=" w-full lg:w-[500px] rounded-lg	shadow-5xl p-[16px] border border-[#D1D5DB]  h-full min-h-[90vh] md:border">
          <div className="flex flex-col gap-2">
            <h2 className="font-Inter font-medium  font-[16px] leading-[24px] text-#111928]">
              {!selectDocument ? "Available Documents" : "Selected Documents"}
            </h2>
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img src={searchIcon} alt="search" className="w-4 h-4"/>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#fff] focus:ring-blue-500 focus:border-[#FF5A1F] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#FF5A1F]"
                  placeholder="Search"
                  onChange={handleSearchChange}
                />
              </div>
            </form>
          </div>
          {!selectDocument ? (
            <>
              {documents.length ? (
                <Accordion className="rounded-lg border border-[#FF5A1F] mt-5">
                  {documents.map(
                    (documentData: DocumentDataType, index: number) => {
                      return (
                        <AccordionPanel className="rounded-lg" key={index}>
                          <AccordionTitle className="font-Inter font-medium  font-[16px] leading-[16px] text-[#4B5563] bg-[#fff] border-b border-t hover:bg-[#E5E7EB] hover:text-[#111928] hover:font-bold focus:outline-none focus:font-bold focus:bg-[#E5E7EB] bg-[#F9FAFB] first:rounded-tl-lg first:rounded-tr-lg last:rounded-br-lg last:rounded-bl-lg">
                            {documentData?.categoryName}{" "}
                          </AccordionTitle>
                          <AccordionContent className="py-2">
                            <ul>
                              {documentData?.documents.map(
                                (
                                  document: DocumentType,
                                  indexNumber: number
                                ) => {
                                  return (
                                    <>
                                      <li key={indexNumber}>
                                        <div className="flex w-full justify-between gap-2 items-center py-3">
                                          <p className="font-Inter font-medium  font-[14px] leading-[18px] text-[#111928]">
                                            {document?.name}
                                          </p>
                                          <a
                                            href="javbascript:;"
                                            className="w-[24px] h-[24px] rounded-lg border border-[#E5E7EB] flex items-center justify-center"
                                            onClick={() => {
                                              setSelectDocument(true);
                                              setSelectedDocumentId(
                                                document?.id
                                              );
                                            }}
                                          >
                                            <img
                                              src={aeroIcon}
                                              alt="aero-icon"
                                            />
                                          </a>
                                        </div>
                                      </li>
                                    </>
                                  );
                                }
                              )}
                            </ul>
                          </AccordionContent>
                        </AccordionPanel>
                      );
                    }
                  )}
                </Accordion>
              ) : (
                <p className="font-Inter font-medium font-[14px] leading-[14px] text-[#4B5563] text-center p-5">
                  No document found!
                </p>
              )}
            </>
          ) : (
            <SelectedDocument
              setSelectDocument={setSelectDocument}
              selectedDocumentId={selectedDocumentId}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableDocument;
