import '../../assets/css/dashboard.css'

function Dashboard() {

    let selectedDate = new Date().toLocaleDateString();

    let president = "President Name"


    var csv_file = new File('src/assets/data/dates_us_president.csv', 'file');
    csv_file.open('r');
    csv_file.encoding = 'utf-8';
    var data = csv_file.read().split('/\r\n|\n/'); // split by lines
    csv_file.close();
    for (var row in data) data[row].split(','); // split all lines by comas

alert(data); // here is your 2d array

    return (
        <div>
            <div>Selected Date: </div>
            <div>{selectedDate}</div>

            <div>US President:</div>
            <div>{president}</div>
        </div>
        

    )
}

export default Dashboard