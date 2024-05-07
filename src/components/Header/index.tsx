import { useMobile } from "../../hooks/useMobile";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

import ArrowIcons from "../../icons/ArrowIcons";
import Dropdown from "../Dropdown";
import Heading from "../../typographies/Heading";
import InvoiceIcons from "../../icons/InvoiceIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const isMobile = useMobile();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="mx-6 mt-8 flex justify-between md:mx-12 md:mt-12 xl:mx-[350px] xl:mt-20">
      <div>
        <Heading
          kind="h1"
          content="Invoices"
          css={`text-2xl md:text-3xl xl:text-5xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
        />
        <Paragraph
          kind="p"
          content={isMobile ? "7 invoices" : "There are 7 total invoices"}
          css={`
            ${theme ? "text-selago" : "text-baliHai"}
          `}
        />
      </div>

      <div className="flex gap-5 self-center md:gap-10">
        <div className="flex cursor-pointer gap-4" onClick={handleClick}>
          <Paragraph
            kind="span"
            content={isMobile ? "Filter" : "Filter by status"}
            css={`font-bold self-center
              ${theme ? "text-white" : "text-vulcan"}
            `}
          />

          {isOpen ? <ArrowIcons kind="up" /> : <ArrowIcons kind="down" />}
        </div>
        {isOpen && <Dropdown callback={setIsOpen} />}

        <button className="flex rounded-full bg-cornflowerBlue p-4 font-bold text-white hover:bg-heliotrope">
          <div className="mr-4 self-center rounded-full bg-white p-2">
            <InvoiceIcons kind="add" />
          </div>

          <Paragraph
            kind="span"
            content={isMobile ? "New" : "New invoice"}
            css="self-center"
          />
        </button>
      </div>
    </header>
  );
};

export default Component;