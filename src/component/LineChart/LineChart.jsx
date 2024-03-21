import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

export default function LineChart() {

    const mathData = [
        { "id": 1, "name": "Alice", "math": 85, "english": 78, "bangla": 80 },
        { "id": 2, "name": "Bob", "math": 78, "english": 85, "bangla": 75 },
        { "id": 3, "name": "Charlie", "math": 92, "english": 90, "bangla": 88 },
        { "id": 4, "name": "David", "math": 65, "english": 72, "bangla": 68 },
        { "id": 5, "name": "Emma", "math": 70, "english": 65, "bangla": 72 },
        { "id": 6, "name": "Frank", "math": 88, "english": 82, "bangla": 85 },
        { "id": 7, "name": "Grace", "math": 75, "english": 78, "bangla": 80 },
        { "id": 8, "name": "Henry", "math": 80, "english": 85, "bangla": 78 },
        { "id": 9, "name": "Ivy", "math": 83, "english": 88, "bangla": 82 },
        { "id": 10, "name": "Jack", "math": 90, "english": 92, "bangla": 90 }
      ]
      ;


    return (
        <div>

            <LChart width={1200} height={500} data={mathData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="math"  stroke="black"></Line>
                <Line dataKey="english"  stroke="red"></Line>
                <Line dataKey="bangla"  stroke="blue"></Line>
            </LChart>

        </div>
    )
}
