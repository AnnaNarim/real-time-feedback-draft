import React from 'react';
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from 'recharts';
import {toArray} from "../../lib/jsUtils";


const templateData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const valuesReg = {
    '0'   : 0,
    '10'  : 0,
    '20'  : 0,
    '30'  : 0,
    '40'  : 0,
    '50'  : 0,
    '60'  : 0,
    '70'  : 0,
    '80'  : 0,
    '90'  : 0,
    '100' : 0
};

const processData = (fields, submittedFormsCount, valuesReg) => {
    const answersArray = fields.map(f => toArray(f.relativeClassAnswers)).reduce((accum, aggr) => {
        aggr.forEach(item => accum.push(item));

        return accum;
    }, []);

    answersArray.forEach(answer => {
        const value = answer.value;

        if(valuesReg[value] !== undefined) {
            valuesReg[value] = valuesReg[value] + 1
        }
    });

    return templateData.map((val) => {
        return {
            subject  : val + "%",
            A        : valuesReg[val],
            fullMark : submittedFormsCount,
        }
    })
};

const PercentageChart = ({fields, submittedFormsCount}) => {
    const data = processData(fields, submittedFormsCount, {...valuesReg});

    return <div>
        <RadarChart cx={300} cy={250} width={600} height={500} data={data}>
            <PolarGrid/>
            <PolarAngleAxis dataKey="subject"/>
            <PolarRadiusAxis/>
            <Radar name="Percentage Result" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
    </div>
};


export default PercentageChart

