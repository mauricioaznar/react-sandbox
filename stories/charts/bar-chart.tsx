import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import type { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
import letterFrequency from '@visx/mock-data/lib/mocks/letterFrequency';
import { GradientTealBlue } from '@visx/gradient';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { LegendItem, LegendLabel, LegendOrdinal } from '@visx/legend';

const data = letterFrequency;
const verticalMargin = 120;
// const purple3 = '#a44afe';

// accessors
const getLetter = (d: LetterFrequency) => d.letter;
const getLetterFrequency = (d: LetterFrequency) => d.frequency;

export type BarsProps = {
    width: number;
    height: number;
    events?: boolean;
};

const legendGlyphSize = 8

export function BarChart({ width, height }: BarsProps) {
    // bounds
    const xMax = width;
    const yMax = height - verticalMargin;

    // scales, memoize for performance
    const xScale = useMemo(
        () =>
            scaleBand<string>({
                range: [0, xMax - 120],
                round: false,
                domain: data.map(getLetter),
                padding: 0.4,

            }),
        [xMax],
    );


    const yScale = useMemo(
        () =>
            scaleLinear<number>({
                range: [yMax, 0],
                round: true,
                domain: [0, Math.max(...data.map(getLetterFrequency)) + .05],
            }),
        [yMax],
    );
    const purple1 = '#6c5efb';
    const purple2 = '#c998ff';
    const purple3 = '#a44afe';


    const colorScale = scaleOrdinal({
        domain: ['New York', 'San Francisco', 'Austin'],
        range: [purple1,purple2, purple3]
    });

    return width < 10 ? null : (
        <div>
            <Group style={{
                position: 'absolute',
                width: '100%',
                transform: 'translate(8px, 8px)',
            }}>
                <LegendOrdinal style={{width: '200px'}} shapeWidth={200} scale={colorScale} labelFormat={(label) => `${String(label).toUpperCase()}`}>
                    {(labels) => (
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {labels.map((label, i) => (
                                <LegendItem
                                    key={`legend-quantile-${i}`}
                                    margin="0 5px"
                                    onClick={() => {
                                        // if (events) alert(`clicked: ${JSON.stringify(label)}`);
                                    }}
                                >
                                    <svg width={legendGlyphSize} height={legendGlyphSize}>
                                        <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />
                                    </svg>
                                    <LegendLabel align="left" margin="0 0 0 4px" >
                                        <span style={{ color: 'white' }}>{label.text}</span>
                                    </LegendLabel>
                                </LegendItem>
                            ))}
                        </div>
                    )}
                </LegendOrdinal>
            </Group>
            <svg width={width} height={height}>
                <GradientTealBlue id="teal" />
                <rect width={width} height={height} fill="url(#teal)" rx={14} />
                <Group left={60} top={verticalMargin / 2}>
                    {data.map((d) => {
                        const letter = getLetter(d);
                        const barWidth = xScale.bandwidth();
                        const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
                        const barX = xScale(letter);
                        const barY = yMax - barHeight;
                        return (
                            <>
                                <Bar
                                    key={`bar-${letter}`}
                                    x={barX}
                                    y={barY}
                                    width={barWidth}
                                    height={barHeight}
                                    fill="rgba(23, 233, 217, .5)"
                                    onClick={() => {
                                        alert(`clicked: ${JSON.stringify(Object.values(d))}`);
                                    }}
                                />
                            </>


                        );
                    })}
                </Group>

            </svg>
        </div>
    );
}

export default BarChart