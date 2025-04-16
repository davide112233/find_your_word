import { Card } from "flowbite-react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export function WordCard() {
    return (
        <div className="word-card-box">
            <Card className="max-w-sm">
                <div className="close-card-button-box">
                    <button className="close-card-button"><IoIosCloseCircleOutline /></button>
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </div>
    );
}
