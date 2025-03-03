export default function Intro(){
    return (
        <>
            <div className="justify-center align-center flex flex-row pt-[5%]">
                <div id={"full-bio"} className={"flex-col space-x-2 ps-[7.5%] w-[70%] pe-[5%] flex-wrap "}>
                    <u className={"text-white-001"}><h3 className={"text-white-001 font-bold text-6xl"}>Who am I?</h3></u>
                    <br></br>
                    <p className={"text-white-001 text-3xl break-after-all "}>Hello! I am Jaysen Xavier Stolarz, a Second Year at the Rochester Institute of Technology.{"\n"}
                    I am studying in the Software Engineering BS program and am so grateful for the opportunity to attend college.{"\n"}
                     I love programming and engineering, as the process of creating or working on something has always been on my mind, and
                    I truly have a lot of passion for creation. {"\n"} I have experience working in teams in both in-class scenarios and competitions,
                    such as hackathons. I have worked on front-end development with React and back-end development with Java Spring boot.</p>
                </div>
                <div className="flex flex-wrap justify-center drop-shadow pe-3">
                    <img className={"img-fluid border-4 shadow-blue-002 object-cover max-w-[100%] max-h-[100%]"} src={"src/assets/photos/headshot.jpg"} alt="headshot"/>
                </div>
            </div>

        </>
    )
}