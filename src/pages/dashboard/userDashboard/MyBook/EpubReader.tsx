import { useState } from "react";
import { ReactReader } from "react-reader";

// type ITextSelection = {
//   text: string;
//   cfiRange: string;
// };

// interface IProps {
//   book: IBook;
// }

export default function EpubReader() {
  const [location, setLocation] = useState<string | number>(0);

  return (
    <div>
      return (
      <div style={{ height: "100vh" }}>
        <ReactReader
          url="https://react-reader.metabits.no/files/alice.epub"
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
        />
      </div>
    </div>
  );
}
