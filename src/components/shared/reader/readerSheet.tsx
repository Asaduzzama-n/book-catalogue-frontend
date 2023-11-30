import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IReactReaderStyle, ReactReader, ReactReaderStyle } from "react-reader";
import { MdElectricBolt } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import type { NavItem, Rendition, Contents } from "epubjs";
import useLocalStorageState from "use-local-storage-state";
import { SelectionSheet } from "./selectionSheet";

type ITheme = "light" | "dark";
type ITextSelection = {
  text: string;
  cfiRange: string;
};

function updateTheme(rendition: Rendition, theme: ITheme) {
  const themes = rendition.themes;
  switch (theme) {
    case "dark": {
      themes.override("color", "#fff");
      themes.override("background", "#0E0E11");
      break;
    }
    case "light": {
      themes.override("color", "#000");
      themes.override("background", "#fff");
      break;
    }
  }
}

export function ReaderSheet() {
  const [selections, setSelections] = useState<ITextSelection[]>([]);
  const [page, setPage] = useState("");
  const [rendition, setRendition] = useState<Rendition | undefined>(undefined);

  //   const rendition = useRef<Rendition | undefined>(undefined);
  const toc = useRef<NavItem[]>([]);
  const [location, setLocation] = useLocalStorageState<string | number>(
    "persist-location",
    {
      defaultValue: 0,
    }
  );

  const [theme, setTheme] = useState<ITheme>("light");
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    if (rendition) {
      updateTheme(rendition, theme);
    }
  }, [theme]);

  useEffect(() => {
    rendition?.themes.fontSize(largeText ? "130%" : "100%");
  }, [largeText]);

  useEffect(() => {
    if (rendition) {
      function setRenderSelection(cfiRange: string, contents: Contents) {
        if (rendition) {
          setSelections((list) =>
            list.concat({
              text: rendition.getRange(cfiRange).toString(),
              cfiRange,
            })
          );
          rendition.annotations.add(
            "highlight",
            cfiRange,
            {},
            undefined,
            "hl",
            { fill: "red", "fill-opacity": "0.5", "mix-blend-mode": "multiply" }
          );
          const selection = contents.window.getSelection();
          selection?.removeAllRanges();
        }
      }

      rendition.on("selected", setRenderSelection);

      return () => {
        rendition.off("selected", setRenderSelection);
      };
    }
  }, [setSelections, rendition]);
  return (
    <div>
      <Sheet key={"top"}>
        <SheetTrigger asChild>
          <button className="bg-[#232F3E] text-white font-medium p-1 md:p-2 hover:bg-[#232F3E] w-32  h-10 border hover:text-[#C89949] flex items-center justify-center">
            <MdElectricBolt className="mr-2"></MdElectricBolt>
            Read Now
          </button>
        </SheetTrigger>
        <SheetContent className="min-h-screen " side={"top"}>
          <div>
            <SelectionSheet
              rendition={rendition}
              setSelections={setSelections}
              selections={selections}
            ></SelectionSheet>
          </div>
          <div className="" style={{ height: "100vh", width: "100%" }}>
            <div className="">
              <button onClick={() => setTheme("light")}>Light</button>
              <button onClick={() => setTheme("dark")}>Dark</button>
            </div>
            <>
              <button onClick={() => setLargeText(!largeText)} className="btn">
                Toggle font-size
              </button>
            </>
            <div className="flex justify-end">{page}</div>
            <ReactReader
              url="https://react-reader.metabits.no/files/alice.epub"
              title="Healing Her Heart"
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
                  }
                });

                _rendition.themes.fontSize(largeText ? "130%" : "110%");
              }}
            ></ReactReader>
          </div>
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const lightReaderTheme: IReactReaderStyle = {
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    transition: undefined,
  },
};

const darkReaderTheme: IReactReaderStyle = {
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
    backgroundColor: "#0E0E11",
    transition: undefined,
  },
  titleArea: {
    ...ReactReaderStyle.titleArea,
    color: "#fff",
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: "#0E0E11",
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
