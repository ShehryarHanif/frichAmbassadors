import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataValues = props.dataValues.map((dataPoint) => dataPoint["value"]);
    
    const totalMaximum = Math.max(...dataValues);

    return (
        <div className="chart">
            { props.dataValues.map((dataValue, index) => <ChartBar key={ index } value={ dataValue["value"] } maxValue={ totalMaximum } label={ dataValue["label"] } />) }
        </div>
    );
}

export default Chart;