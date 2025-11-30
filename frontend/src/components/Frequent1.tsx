
interface FrequentData{
    title?:string,
    category?:string,
    subset?:string,
    ferq?:string,
    unit?:string,
    src?:string,
    coverage?:string,

}

export default function Frequent1({title,category,subset,ferq,unit,src,coverage}:FrequentData){

    
    return(
        <div className="grid grid-cols-[0.5fr_0.2fr_0.1fr_0.1fr_0.1fr] h-auto overflow-hidden my-2 bg-white rounded-md p-2">
            <div className=" p-2 "> 
                <div className="font-semibold">{title}</div>
                <div className="font-normal text-sm mt-2 text-[#2596be] bg-[#d4ebf4] w-58 rounded-md px-2">{category}</div>
            </div>
            <div className="p-2 font-bold  text-sm "> 
                {subset} <br />
                <span className="font-light text-gray-900">{ferq}</span>
            </div>
            <div className="  font-bold text-sm p-2"> {unit}</div>
            <div className="font-bold text-sm p-2"> {src}</div>
            <div className="font-bold text-sm p-2"> {coverage}</div>
            
        </div>
    )
}