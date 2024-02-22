"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getReadingbooks, getAllBookmits } from "@/src/api";
import { ReadingBookShelf, LargeButton } from "@/src/components";

export default function Home() {
  const [readingbooks, setReadingbooks] = useState([]);
  const [bookmits, setBookmits] = useState([]);
  const [selectedbookIsbn, setSelectedbookIsbn] = useState<string | null>(null);

  const handleSelectedBook = (isbn: string) => {
    setSelectedbookIsbn(() => (isbn === selectedbookIsbn ? null : isbn));
  };

  useEffect(() => {
    const readingbooks = getReadingbooks();
    setReadingbooks(() => readingbooks);
  }, []);

  useEffect(() => {
    const bookmits = getAllBookmits();
    setBookmits(() => bookmits);
  }, []);

  return (
    <main className="flex flex-col gap-1">
      <NewBookButton isReadingbookExist={!!readingbooks.length} />
      <ReadingBookShelf
        readingbooks={readingbooks}
        onClick={handleSelectedBook}
      />
      {!readingbooks.length && (
        <Link href="./books/create">
          <LargeButton>새 책 등록하기</LargeButton>
        </Link>
      )}
      <div>{selectedbookIsbn || "."}</div>
      {JSON.stringify(bookmits)}
    </main>
  );
}

function NewBookButton({
  isReadingbookExist,
}: {
  isReadingbookExist: boolean;
}) {
  return (
    <div className="text-right">
      <Link href="/books/create">
        <button
          className={`${!isReadingbookExist && "invisible"} text-sm text-blue-500`}
        >
          새 책 등록
        </button>
      </Link>
    </div>
  );
}
