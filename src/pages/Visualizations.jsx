import Visualization from '../components/Visualization';

export default function Visualizations() {

    let vizs = [
        {
            name: "US Presidents",
            id: "presidents",
            url: "https://public.tableau.com/app/profile/estevan.gonzales8848/viz/USPresidents_17097719423380/Sheet1",
            image_url: "/images/presidents.png"
        }
    ];
            
    return (
            <div className="outside-vizs">
                <div className="vizs-header">Visualizations</div>
                <Visualization vizs={vizs}/>
            </div>
    );

};
