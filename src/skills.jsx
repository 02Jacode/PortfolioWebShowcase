import './assets/Skills.css'; 

const iconskilss = [
    { name: 'HTML', icon: "/SkillsIcon/html.png" },
    { name: 'CSS', icon: "/SkillsIcon/css.png" },
    { name: 'JavaScript', icon: "/SkillsIcon/js.png" },
    { name: 'React', icon: "/SkillsIcon/react.png" },
    { name: 'Bootstrap', icon: "/SkillsIcon/bootstrap.png" },
    { name: 'Photoshop', icon: "/SkillsIcon/ps.png" },
    { name: 'Figma', icon: "/SkillsIcon/figma.png" },
    { name: 'PHP', icon: "/SkillsIcon/php.png" },
    { name: 'SQL', icon: "/SkillsIcon/sql.png" },
    { name: 'Cisco', icon: "/SkillsIcon/cisco.png" },
    { name: 'AWS', icon: "/SkillsIcon/aws.png" },
    { name: 'JAVA', icon: "/SkillsIcon/java.png" },
    { name: 'C++', icon: "/SkillsIcon/c++.png" },
    { name: 'C#', icon: "/SkillsIcon/csharp.png" },
    { name: 'Python', icon: "/SkillsIcon/python.png" },
    { name: 'Apache Cordova', icon: "/SkillsIcon/cordova.png" },
    { name: 'Blender', icon: "/SkillsIcon/blender.png" },
    { name: 'Adobe Animate', icon: "/SkillsIcon/animate.png" },
    { name: 'Visual Studio', icon: "/SkillsIcon/vscode.png" },
    { name: 'Microsoft Offices', icon: "/SkillsIcon/office.png" },
    { name: 'Php MyAdmin', icon: "/SkillsIcon/phpmyadmin.png" },
    { name: 'Filmora', icon: "/SkillsIcon/filmora.png" },
    { name: 'Canva', icon: "/SkillsIcon/canva.png" },
    { name: 'Canva', icon: "/SkillsIcon/filezilla.png" },
    { name: 'OBS Studio', icon: "/SkillsIcon/obs.png" }
]

function Skills(){
    return(
        <>
        <div className="containers">
            <h1>SKILLS</h1>
            <div className="Skillset">
                <div className="frontend">
                <fieldset>
                <legend>Front-End</legend>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Photshop</li>
                    <li>Figma</li>
                    <li></li>
                    <li></li>


                </ul>
                </fieldset>
                </div>

                <div className="backend">
                <fieldset>
                <legend>Back-End</legend>
                <ul>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
                </fieldset>
                </div>

                <div className="tools">
                <fieldset>
                <legend>Tools/Tech Encountered</legend>
                <ul>
                    <li>Cisco</li>
                    <li>AWS</li>
                    <li>JAVA</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Apache Cordova</li>
                    <li>Blender</li>
                    <li>Adobe Animate</li>
                </ul>
                </fieldset>
                </div>

                <div className="others">
                <fieldset>
                <legend>Others</legend>
                <ul>
                    <li>Visual Studio</li>
                    <li>Microsoft Offices</li>
                    <li>Php MyAdmin</li>
                    <li>Filmora</li>
                    <li>Canva</li>
                    <li>OBS Studio</li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
                </fieldset>
                </div>
            </div>
            <div className="icons">
                {iconskilss.map((icon, index) => (
                    <div key={index} className="footer-icon">
                        <img 
                            src={icon.icon} 
                            alt={`${icon.name} icon`}
                        />
                    </div>
                ))}
            </div>
        </div>
                    <hr />

        </>
    );
}

export default Skills