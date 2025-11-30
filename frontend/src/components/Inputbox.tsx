
interface Input{
    placeholder:string,
    ref:any
    type?:string
}
export default function Inputbox({placeholder , ref,type}:Input){

    return (
        <div>
            <input className="w-full px-2 py-2 border-2 border-gray-300 rounded-md m-2" type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
}