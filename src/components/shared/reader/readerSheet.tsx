import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactReader, ReactReaderStyle } from "react-reader";
import { MdElectricBolt, MdSettings } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import type { NavItem, Rendition, Contents } from "epubjs";
import useLocalStorageState from "use-local-storage-state";

import { useTheme } from "@/components/theme/theme-provider";
import { IBook } from "@/types/globalTypes";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineFontSize } from "react-icons/ai";

type ITheme = "light" | "dark" | "system" | "sepia";
// type ITextSelection = {
//   text: string;
//   cfiRange: string;
// };

interface IProps {
  book: IBook;
}

export function ReaderSheet(props: IProps) {
  const { book } = props;

  //Disable Right and left click in reader

  // Add event listeners for screenshot events

  const [page, setPage] = useState("");
  const [rendition, setRendition] = useState<Rendition | undefined>(undefined);
  let { theme } = useTheme();
  if (theme === "system") theme = "dark";

  const toc = useRef<NavItem[]>([]);
  const [location, setLocation] = useLocalStorageState<string | number>(
    "persist-location",
    {
      defaultValue: 0,
    }
  );
  //Font Size Customization
  const [fontSize, setFontSize] = useState<number>(100);
  const handleSlider = (value: any) => {
    setFontSize(value[0]);
  };
  const [readerTheme, setReaderTheme] = useState<ITheme>(theme);

  const handleThemeChange = (theme: "light" | "dark" | "sepia" | "system") => {
    switch (theme) {
      case "light":
        setReaderTheme("light");
        break;
      case "dark":
        setReaderTheme("dark");
        break;
      case "sepia":
        setReaderTheme("sepia");
        break;
      case "system":
        setReaderTheme("system");
        break;
      default:
        setReaderTheme("light");
    }
  };

  useEffect(() => {
    if (rendition) {
      switch (readerTheme) {
        case "dark":
          rendition.themes.override("color", darkReaderTheme.body.color);
          rendition.themes.override(
            "background",
            darkReaderTheme.readerArea.backgroundColor?.toString() || ""
          );

          // override other properties as needed
          break;
        case "light":
          rendition.themes.override("color", lightReaderTheme.body.color);
          rendition.themes.override(
            "background",
            lightReaderTheme.readerArea.backgroundColor?.toString() || ""
          );
          // override other properties as needed
          break;
        case "sepia":
          rendition.themes.override("color", sepiaReaderTheme.body.color);
          rendition.themes.override(
            "background",
            sepiaReaderTheme.readerArea.backgroundColor?.toString() || ""
          );
          // override other properties as needed
          break;
      }
    }
  }, [rendition, readerTheme]);

  useEffect(() => {
    rendition?.themes.fontSize(fontSize.toString() + "%");
  }, [fontSize]);

  return (
    <div>
      <Sheet key={"top"}>
        <SheetTrigger asChild>
          <button className="bg-primary text-white font-medium p-1 md:p-2 hover:opacity-90 w-32  h-10 border  flex items-center justify-center">
            <MdElectricBolt className="mr-2"></MdElectricBolt>
            Read Now
          </button>
        </SheetTrigger>
        <SheetContent className=" w-full" side={"top"}>
          <div className="" style={{ height: "100vh", width: "100%" }}>
            <div className="flex justify-end mx-12">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-customBG dark:bg-primary p-2 rounded-full flex items-center justify-center">
                  <MdSettings size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-[300px] text-primary dark:text-white shadow-lg mx-20">
                  {/* <DropdownMenuItem> */}
                  <div className="flex items-center">
                    <span>
                      {" "}
                      <AiOutlineFontSize
                        className="text-primary dark:text-white   rounded-full  p-2"
                        size={40}
                      />
                    </span>
                    <Slider
                      defaultValue={[110]}
                      onValueChange={(value) => handleSlider(value)}
                      className="mx-5 "
                      max={150}
                      min={80}
                      step={10}
                    />
                  </div>
                  {/* </DropdownMenuItem> */}
                  <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleThemeChange("sepia")}>
                    Sepia
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleThemeChange("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex justify-end">{page}</div>
            <ReactReader
              url={book?.bookUrl?.url}
              title={book?.title}
              readerStyles={
                theme === "dark" ? darkReaderTheme : lightReaderTheme
              }
              showToc={true}
              location={location}
              tocChanged={(_toc) => (toc.current = _toc)}
              locationChanged={(loc: string) => {
                setLocation(loc);
                if (rendition && toc.current) {
                  const { displayed, href } = rendition.location.start;
                  const chapter = toc.current.find(
                    (item) => item.href === href
                  );
                  setPage(
                    `Page ${displayed.page} of ${displayed.total} in chapter ${
                      chapter ? chapter.label : "Introduction"
                    }`
                  );
                }
              }}
              epubOptions={{
                flow: "scrolled",
                manager: "continuous",
              }}
              getRendition={(_rendition: Rendition) => {
                setRendition(_rendition);

                _rendition.hooks.content.register((contents: Contents) => {
                  const body = contents.window.document.querySelector("body");
                  if (body) {
                    body.oncontextmenu = () => {
                      return false;
                    };
                    body.onmousedown = (e) => {
                      if (e.button === 0 || e.button === 2) {
                        // left or right click
                        e.preventDefault();
                      }
                    };
                    body.onkeydown = (e) => {
                      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                      }
                      if (e.key === "v" && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                      }
                    };
                  }
                });

                _rendition.themes.fontSize(fontSize.toString() + "%");
              }}
            ></ReactReader>
          </div>
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const lightReaderTheme = {
  body: {
    // ...existing styles
    userSelect: "none",
    color: "#000",
  },
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    transition: undefined,
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: "#f5f5f5",
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: "#333",
  },
};

const darkReaderTheme = {
  body: {
    // ...existing styles
    userSelect: "none",
    color: "#fff",
  },
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: "white",
  },
  arrowHover: {
    ...ReactReaderStyle.arrowHover,
    color: "#ccc",
  },
  readerArea: {
    ...ReactReaderStyle.readerArea,
    backgroundColor: "#030712",
    transition: undefined,
  },
  titleArea: {
    ...ReactReaderStyle.titleArea,
    color: "#fff",
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: "#030712",
  },
  tocButtonExpanded: {
    ...ReactReaderStyle.tocButtonExpanded,
    background: "#222",
  },
  tocButtonBar: {
    ...ReactReaderStyle.tocButtonBar,
    background: "#fff",
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: "white",
  },
};

const sepiaReaderTheme = {
  body: {
    // ...existing styles
    userSelect: "none",
    color: "rgba(0, 0, 0, 0.8)",
  },
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: "rgba(255, 165, 0, 0.8)", // adjust the sepia color as needed
  },
  arrowHover: {
    ...ReactReaderStyle.arrowHover,
    color: "rgba(255, 165, 0, 0.6)", // adjust the sepia color as needed
  },
  readerArea: {
    ...ReactReaderStyle.readerArea,
    backgroundColor: "rgba(245, 222, 179, 0.9)", // adjust the sepia color as needed
    transition: undefined,
  },
  titleArea: {
    ...ReactReaderStyle.titleArea,
    color: "rgba(0, 0, 0, 0.8)", // adjust the sepia color as needed
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: "#f5e6cc",
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: "#663300",
  },
  // tocButtonBar: {
  //   ...ReactReaderStyle.tocButtonBar,
  //   background: "rgba(0, 0, 0, 0.8)", // adjust the sepia color as needed
  // },
  // tocButton: {
  //   ...ReactReaderStyle.tocButton,
  //   color: "rgba(0, 0, 0, 0.8)", // adjust the sepia color as needed
  // },
};
