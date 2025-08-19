import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const AppBarChart = () => {
    const chartData = [
{ month: "January", figure: 186, fumo: 80 },
  { month: "February", figure: 305, fumo: 200 },
  { month: "March", figure: 237, fumo: 120 },
  { month: "April", figure: 73, fumo: 190 },
  { month: "May", figure: 209, fumo: 130 },
  { month: "June", figure: 214, fumo: 140 },
]
const chartConfig = {
  figure: {
    label: "figure",
    color: "#2563eb",
  },
  fumo: {
    label: "Fumo",
    color: "#60a5fa",
  },
} satisfies ChartConfig
  return (
    <div>
        <h1 className='mb-5'>Total Revenues</h1>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false}/>
        <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value)=>value.slice(0,3)}
        />
        <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent/>}/>
        <ChartLegend content={<ChartLegendContent/>}/>
        <Bar dataKey="figure" fill="var(--color-figure)" radius={4} />
        <Bar dataKey="fumo" fill="var(--color-fumo)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}

export default AppBarChart
