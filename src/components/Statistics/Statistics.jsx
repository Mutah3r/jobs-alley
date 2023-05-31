import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const data = [
    { x: 1, y: 60, z: 200 },
    { x: 2, y: 59, z: 260 },
    { x: 3, y: 59, z: 400 },
    { x: 4, y: 60, z: 280 },
    { x: 5, y: 60, z: 500 },
    { x: 6, y: 60, z: 200 },
    { x: 7, y: 60, z: 200 },
    { x: 8, y: 60, z: 200 },
];

const Statistics = () => {
    return (
        <div className='statistics-wrapper'>
            <h3 className='statistics-page-title'>Assignment Marks</h3>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="Assignment" unit="" />
                        <YAxis type="number" dataKey="y" name="Marks" unit="" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="A school" data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;