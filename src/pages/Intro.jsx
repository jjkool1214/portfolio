export default function Intro(){
    return (
        <div className="justify-center align-center flex flex-row">
            <div id={"full-bio"} className={"flex-col space-x-2"}>
                <h3 className={"text-white-001 font-bold text-5xl"}>Who I am</h3>
                <br></br>
                <p className={"text-white-001 text-3xl break-after-all space-x-4"}>Hello! I am Jaysen Xavier Stolarz, a Second Year at the Rochester Institute of Technology.
                I am studying in the Software Engineering BS program and am so grateful for the opportunity to attend college.
                I love programming and engineering, as the process of creating or working on something has always been on my mind, and
                I truly have a lot of passion for creation. I have experience working in teams in both in-class scenarios and competitions,
                such as hackathons. I have worked on front-end development with React and back-end development with Java Spring boot.</p>
            </div>
            <img className={"img-fluid"} src={"src/assets/photos/headshot.jpg"} alt="headshot"/>
        </div>
    )
}