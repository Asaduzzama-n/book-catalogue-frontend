import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Rendition } from "epubjs";
import React from "react";

type ITextSelection = {
  text: string;
  cfiRange: string;
};

type SelectionSheetProps = {
  rendition?: Rendition;
  selections: ITextSelection[];
  setSelections: React.Dispatch<React.SetStateAction<ITextSelection[]>>;
};

export function SelectionSheet({
  rendition,
  selections,
  setSelections,
}: SelectionSheetProps) {
  const SheetCloseRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          <button className="bg-[#232F3E] text-white font-medium p-1 md:p-2 hover:bg-[#232F3E] w-32  h-10 border hover:text-[#C89949] flex items-center justify-center">
            Selected Items
          </button>
        </SheetTrigger>
        <SheetContent className=" overflow-y-auto" side={"right"}>
          <div className="">
            <h2 className="font-bold mb-1">Selections</h2>
            <ul className="grid grid-cols-1">
              {selections.length == 0 && (
                <>
                  <p className="my-5 text-center">No Selected Items</p>
                </>
              )}
              {selections?.map(({ text, cfiRange }: ITextSelection, i: any) => (
                <li key={i} className="p-2 bg-[#F0F3F7] my-4 rounded-md">
                  {text.length > 200 ? (
                    <span>{text.substring(0, 200) + "..."}</span>
                  ) : (
                    <span> {text}</span>
                  )}
                  <br />
                  <button
                    className="text-sm bg-[#232F3E] text-white px-2 rounded-md"
                    onClick={() => {
                      rendition?.display(cfiRange);
                      SheetCloseRef.current?.click();
                    }}
                  >
                    Show
                  </button>
                  <button
                    className="text-sm bg-red-500 text-white px-2 rounded-md mx-2"
                    onClick={() => {
                      rendition?.annotations.remove(cfiRange, "highlight");
                      setSelections(selections.filter((_, j) => j !== i));
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
