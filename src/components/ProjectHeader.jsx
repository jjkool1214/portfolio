export default function ProjectHeader(props){
    return(
        <>
            <div className="justify-center border-4 rounded-xl relative text-center">
                <button className={"hover:text-blue-003"}>
                    <img src={props.filename} className="opacity-50" alt={props.title}/>
                    <h2 className={"text-white-001 top-0 left-0 absolute w-full h-full text-center flex items-center justify-center"}>{props.title}</h2>
                </button>
            </div>
        </>
    )
}