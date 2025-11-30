import { useState } from "react";

import response2 from '../response2.json'
import response1 from '../response1.json'
interface Dropdata {
    setFrequent: any,
    setcategory: any
}

export const DATASETS = {
    "dataset-IMF": {
        frequent: response2.frequent,
        categories: response2.categories
    },
    "Sectors": {
        frequent: response1.frequent,
        categories: response1.categories
    }
} as const;
export type DatasetKey = keyof typeof DATASETS;

export default function Dropdown({ setFrequent, setcategory }: Dropdata) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");



    const handleSelect = (key: DatasetKey) => {
        const dataset = DATASETS[key];

        setSelected(key);
        setFrequent(dataset.frequent);
        setcategory(dataset.categories);

        setOpen(false);
    };

    return (
        <div className="relative inline-block">

            <button
                onClick={() => setOpen(!open)}
                className="px-8 py-2 bg-white cursor-pointer hover:bg-gray-100  rounded"
            >
                <h1 className="text-sm font-normal">Category ↓:</h1>

                {selected || "Sectors"}
            </button>

            {open && (
                <div className="absolute mt-2 bg-white border rounded shadow w-40">
                    <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleSelect("dataset-IMF")}
                    >
                        Dataset-IMF
                    </button>
                    <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleSelect("Sectors")}
                    >
                        Sectors
                    </button>
                </div>
            )}
        </div>
    );
}
