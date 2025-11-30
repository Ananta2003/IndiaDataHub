import { useState } from "react";
import Frequent1 from "../components/Frequent1";
import { TreeView } from "../components/TreeView";
import response1 from '../response1.json'
import Pagination from "../components/Pagination";
import Dropdown from "../components/Dropdown";
import { buildTree } from "../utils/buildTree";

export default function Dashboard() {

    const [frequent, setFrequent] = useState(response1.frequent);

    const [currentPage, setCurrentPage] = useState(1)
    const postperPage = 10

    const lastperPage = currentPage * postperPage;
    const firstperPage = lastperPage - postperPage;
    const data = frequent.slice(firstperPage, lastperPage);

    const [category, setcategory] = useState(response1.categories);
    const categoryTree = buildTree(category);
    return (
        <div>
            <div className="h-16 bg-[#1c1362]"></div>
            <div className="m-4">
                <div className="grid grid-cols-[250px_1fr] h-auto gap-4">
                    <div className="  rounded-lg ">
                        <div className="bg-[#cedbf5] rounded-lg p-4 my-2">
                            <Dropdown setFrequent={setFrequent} setcategory={setcategory}/>

                        </div>
                        <div className="bg-[#f5f8fd] rounded-lg p-4"><TreeView menus={categoryTree} /></div>
                    </div>
                    <section className="bg-gray-200 rounded-lg p-4  ">
                        <div className="grid grid-cols-[0.5fr_0.2fr_0.1fr_0.1fr_0.1fr] h-auto w-full my-2 bg-white rounded-md p-2 text-[#2b2b5d] font-bold">
                            <div className=" p-2 ">
                                New Release ({frequent.length})
                            </div>
                            <div className="p-2">
                                Range
                            </div>
                            <div className=" p-2"> Unit</div>
                            <div className=" p-2"> Src</div>
                            <div className=" p-2"> Coverage</div>

                        </div>
                        <div className="w-full overflow-x-auto">
                            {data.map((item, key) => (
                                <Frequent1 title={item.title} category={item.subCat} subset={item.cat} ferq={item.freq} unit={item.unit} src={item.src} coverage={item.db} key={key} />
                            ))}
                        </div>

                        <Pagination totalPosts={frequent.length} postPerPage={postperPage} setCurrentPage={setCurrentPage} />

                    </section>
                </div>
            </div>
        </div>
    )
}