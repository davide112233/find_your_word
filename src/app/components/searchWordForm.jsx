import { Button, Label, TextInput } from "flowbite-react";
import DOMPurify from "isomorphic-dompurify";

export default function SearchWordForm() {
    const searchWordTextInput = "type a word";
    const searchWordButton = "search";

    return (
        <div className="search-word-form-box">
            <form className="search-word-form" autoComplete="off">
                <Label htmlFor="" />
                <TextInput name="" id="" placeholder={DOMPurify.sanitize(searchWordTextInput)} required />
                <Button type="submit" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(searchWordButton) }} />
            </form>
        </div>
    );
}