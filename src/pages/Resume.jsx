export default function Resume(props){
    return(
        <div className={"flex flex-col items-center pt-5"}>
            <div id={"education"} className={"flex justify-center items-center w-[50vw] h-[70vh]"}>
                <embed src="src/assets/documents/resume_03_05_2025.pdf" type="application/pdf" className={"w-full h-full"}/>
            </div>
            <a href={"src/assets/documents/resume_03_05_2025.pdf"} download={"jaysen_stolarz_2025.pdf"} className={"underline text-white-001 text-4xl hover:text-blue-002"}>Download</a>
        </div>
    )
}