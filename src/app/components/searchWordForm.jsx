"use client";

import { Button, Label, TextInput } from "flowbite-react";
import DOMPurify from "isomorphic-dompurify";
import { useRef } from "react";
import { dictionaryWordStore } from "../utils/dictionaryWordStore";

export default function SearchWordForm() {
    const inputRef = useRef(null);
    const setWord = dictionaryWordStore((state) => state.setWord);

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value.trim();
        if (!value) return;
        setWord(value.toLowerCase());
        inputRef.current.value = "";
    };

    return (
        <div className="search-word-form-box">
            <form className="search-word-form" autoComplete="off" onSubmit={handleSubmit}>
                <Label htmlFor="search-word" />
                <TextInput
                    id="search-word"
                    placeholder={DOMPurify.sanitize("type a word")}
                    required
                    ref={inputRef}
                />
                <Button type="submit" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize("search") }} />
            </form>
        </div>
    );
}
