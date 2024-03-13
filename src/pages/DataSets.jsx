import DataSet from "../components/DataSet";

export default function DataSets() {
    
    let datasets = [
        {
            "file": "oscars_acting_noms"
        }
    ]
            
    return (
        <div>
            <div className = "container">
                <div className="row">
                    <div className="col pages-header">Data Sets</div>
                </div>
            </div>
                <DataSet datasets={datasets}/>
        </div>

    )
}
