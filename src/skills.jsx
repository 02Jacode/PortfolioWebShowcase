import './assets/Skills.css'; 

const iconskilss = [
    { name: 'HTML', icon: "../public/SkillsIcon/html.png" },
    { name: 'CSS', icon: "../public/SkillsIcon/css.png" },
    { name: 'JavaScript', icon: "../public/SkillsIcon/js.png" },
    { name: 'React', icon: "../public/SkillsIcon/react.png" },
    { name: 'Bootstrap', icon: "../public/SkillsIcon/bootstrap.png" },
    { name: 'Photoshop', icon: "../public/SkillsIcon/ps.png" },
    { name: 'Figma', icon: "../public/SkillsIcon/figma.png" },
    { name: 'PHP', icon: "../public/SkillsIcon/php.png" },
    { name: 'SQL', icon: "../public/SkillsIcon/sql.png" },
    { name: 'Cisco', icon: "../public/SkillsIcon/cisco.png" },
    { name: 'AWS', icon: "../public/SkillsIcon/aws.png" },
    { name: 'JAVA', icon: "../public/SkillsIcon/java.png" },
    { name: 'C++', icon: "../public/SkillsIcon/c++.png" },
    { name: 'C#', icon: "../public/SkillsIcon/csharp.png" },
    { name: 'Python', icon: "../public/SkillsIcon/python.png" },
    { name: 'Apache Cordova', icon: "../public/SkillsIcon/cordova.png" },
    { name: 'Blender', icon: "../public/SkillsIcon/blender.png" },
    { name: 'Adobe Animate', icon: "../public/SkillsIcon/animate.png" },
    { name: 'Visual Studio', icon: "../public/SkillsIcon/vscode.png" },
    { name: 'Microsoft Offices', icon: "../public/SkillsIcon/office.png" },
    { name: 'Php MyAdmin', icon: "../public/SkillsIcon/phpmyadmin.png" },
    { name: 'Filmora', icon: "../public/SkillsIcon/filmora.png" },
    { name: 'Canva', icon: "../public/SkillsIcon/canva.png" },
    { name: 'Canva', icon: "../public/SkillsIcon/filezilla.png" },
    { name: 'OBS Studio', icon: "../public/SkillsIcon/obs.png" }
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