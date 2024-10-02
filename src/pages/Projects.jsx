import Project from '../components/Project';

export default function Projects() {

    let projects = [
        {
            name: "Cube",
            id: "cube",
            image_url: "/images/monopoly.png"
        },
        {
            name: "Monopoly",
            id: "monopoly",
            image_url: "/images/monopoly.png"
        },
        {
            name: "The Elements",
            id: "elements",
            image_url: "/images/elements.png",
        },
        {
            name: "Halfs",
            id: "halfs",
            image_url: "/images/halfs.png",

        },
        {
            name: "TypeHype",
            id: "typehype",
            image_url: "/images/typehype.png",
        }
    ];
            
    return (
        
            <div>
                <div className = "container">
                    <div className="row">
                        <div className="col pages-header">Projects</div>
                    </div>
                </div>
                    <Project projects={projects}/>
            </div>

    );

};

