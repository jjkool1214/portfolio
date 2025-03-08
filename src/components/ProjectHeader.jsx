export default function ProjectHeader(props){
    return(
        <div className="justify-center border-4 rounded-xl relative text-center hover:text-blue-002 mt-5">
            <button className={""}>
                <img src={props.filename} className="opacity-50" alt={props.title}/>
                <h2 className={"hover:text-blue-002 text-white-001 top-0 left-0 absolute w-full h-full text-center flex items-center justify-center"}>{props.title}</h2>
            </button>
        </div>
    )
}