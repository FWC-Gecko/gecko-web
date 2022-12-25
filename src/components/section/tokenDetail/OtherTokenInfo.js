import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function OtherTokenInfo() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const theme = {
    accordion: {
      styles: {
        base: {
          container: {
            bgColor: "bg-white",
            height: "100px",
          },
          body: {
            height: "300px",
          },
        },
      },
    },
  };

  const ProjectLink = ({ icon, text }) => {
    return (
      <div className="flex justify-start items-center gap-4 py-2">
        <img src={icon} alt="" className="h-8 w-8" />
        <p className="text-lg">{text}</p>
      </div>
    );
  };

  return (
    <div className="text-white w-full mt-5 sm:mt-0">
      <Accordion
        open={open === 1}
        theme={theme}
        className={` ${open === 1 && "h-[330px]"} bg-[#121318] rounded-xl`}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={` ${
            open === 1 ? "border-b border-[#23262F]" : "border-0"
          } px-4`}
        >
          <p className="font-bold">Project Links</p>
        </AccordionHeader>
        <AccordionBody className="px-4">
          <div className="flex justify-between gap-4">
            <div className="w-full px-1">
              <ProjectLink
                icon="/img/token-link/whitepaper.png"
                text="Website"
              />
              <ProjectLink
                icon="/img/token-link/whitepaper.png"
                text="Whitepaper"
              />
              <ProjectLink
                icon="/img/token-link/annoucement.png"
                text="Annoucement"
              />
              <ProjectLink icon="/img/token-link/twitter.png" text="Twitter" />
              <ProjectLink
                icon="/img/token-link/telegram.png"
                text="Telegram"
              />
            </div>
            <div className="w-full px-1">
              <ProjectLink icon="/img/token-link/github.png" text="Github" />
              <ProjectLink
                icon="/img/token-link/congecko.png"
                text="Coingecho"
              />
              <ProjectLink
                icon="/img/token-link/pancakeswap.png"
                text="Pancakeswap"
              />
              <ProjectLink icon="/img/token-link/audit.png" text="Audit" />
              <ProjectLink icon="/img/token-link/rediit.png" text="Rediit" />
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        theme={theme}
        className={` ${open === 2 && "h-[330px]"} bg-[#121318] rounded-xl`}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={` ${
            open === 2 ? "border-b border-[#23262F]" : "border-0"
          } px-4 mt-4`}
        >
          <p className="font-bold">Token information</p>
        </AccordionHeader>
        <AccordionBody className="px-4">
          <p>asdf</p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        theme={theme}
        className={` ${open === 3 && "h-[330px]"} bg-[#121318] rounded-xl`}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={` ${
            open === 3 ? "border-b border-[#23262F]" : "border-0"
          } px-4 mt-4`}
        >
          <p className="font-bold">Website</p>
        </AccordionHeader>
        <AccordionBody className="px-4">
          <p>website</p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        theme={theme}
        className={` ${open === 4 && "h-[330px]"} bg-[#121318] rounded-xl`}
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={` ${
            open === 4 ? "border-b border-[#23262F]" : "border-0"
          } px-4 mt-4`}
        >
          <p className="font-bold">Chains</p>
        </AccordionHeader>
        <AccordionBody className="px-4">
          <p>Chains</p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        theme={theme}
        className={` ${open === 5 && "h-[330px]"} bg-[#121318] rounded-xl`}
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={` ${
            open === 5 ? "border-b border-[#23262F]" : "border-0"
          } px-4 mt-4`}
        >
          <p className="font-bold">Description</p>
        </AccordionHeader>
        <AccordionBody className="px-4">
          <p>Description</p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 6}
        theme={theme}
        className={` ${open === 6 && "h-[330px]"} bg-[#121318] rounded-xl`}
      >
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={` ${
            open === 5 ? "border-b border-[#23262F]" : "border-0"
          } px-4 mt-4`}
        >
          <p className="font-bold">Supply</p>
        </AccordionHeader>
        <AccordionBody className="px-4">
          <p>Supply</p>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default OtherTokenInfo;
