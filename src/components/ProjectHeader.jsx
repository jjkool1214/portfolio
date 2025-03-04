export default function ProjectHeader(props){
    return(
        <div className="justify-center border-4 rounded-xl relative text-center">
            <img src={props.filename} className="opacity-50 w-20 h-20" alt={props.title}/>
            <div className={"text-white-001 top-0 left-0"}>{props.title}</div>
        </div>
    )
}