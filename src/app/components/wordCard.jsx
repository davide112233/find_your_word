"use client";

import { Card } from "flowbite-react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { dictionaryWordStore } from "../utils/dictionaryWordStore";
import { useWordDefinition } from "../utils/useWordDefinition";

export function WordCard() {
    const word = dictionaryWordStore((state) => state.word);
    const setWord = dictionaryWordStore((state) => state.setWord);
    const { data, isLoading, isError } = useWordDefinition(word);

    const closeCard = () => setWord("");

    return (
        word && (
            <div className="word-card-box">
                <Card className="word-card">
                    <div className="close-card-button-box">
                        <button className="close-card-button" onClick={closeCard}>
                            <IoIosCloseCircleOutline />
                        </button>
                    </div>
                    <div className="word-meaning">
                        {isLoading && <p>Loading...</p>}
                        {isError && <p>Word not found.</p>}
                        {data && data[0]?.meanings?.[0]?.definitions?.[0]?.definition && (
                            <p>{data[0].meanings[0].definitions[0].definition}</p>
                        )}
                    </div>
                </Card>
            </div>
        )
    );
}
