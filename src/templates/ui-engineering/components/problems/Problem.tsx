import React from "react";
import { Box, Typography } from "@mui/material";

export interface ProblemItemProps {
  problem: string;
  example?: React.ReactElement<any, any>;
  solutions?: string[];
  tradeoffs?: string[];
  answers?: string[];
}

export function Problem(props: ProblemItemProps) {
  const { problem, solutions, tradeoffs, example, answers } = props;

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant={"h6"} sx={{ fontSize: "1.2rem", mb: 2 }}>
        {problem}
      </Typography>
      {example ? (
        <Box sx={{ mb: 2 }}>
          <Typography variant={"body1"} sx={{ mb: 1 }}>
            Example
          </Typography>
          {example}
        </Box>
      ) : null}

      {solutions && solutions.length > 0 ? (
        <Box sx={{ mb: 2 }}>
          <Typography variant={"body1"}>
            {`Solution${solutions.length > 1 ? "s" : ""}`}
          </Typography>
          <ul style={{ margin: 0 }}>
            {solutions.map((s, index) => {
              return <li key={index}>{s}</li>;
            })}
          </ul>
        </Box>
      ) : null}

      {answers && answers.length > 0 ? (
        <Box sx={{ mb: 2 }}>
          <Typography variant={"body1"}>
            {`Answer${answers.length > 1 ? "s" : ""}`}
          </Typography>
          <ul style={{ margin: 0 }}>
            {answers.map((s, index) => {
              return <li key={index}>{s}</li>;
            })}
          </ul>
        </Box>
      ) : null}

      {tradeoffs && tradeoffs.length > 0 ? (
        <Box>
          <Typography variant={"body1"}>
            {`Tradeoff${tradeoffs.length > 1 ? "s" : ""}`}
          </Typography>
          <ul style={{ margin: 0 }}>
            {tradeoffs.map((s, index) => {
              return <li key={index}>{s}</li>;
            })}
          </ul>
        </Box>
      ) : null}
    </Box>
  );
}

interface ProblemsProps {
  items: ProblemItemProps[];
}

export function Problems(props: ProblemsProps) {
  const { items } = props;

  return (
    <Box>
      {items.map((psm, index) => {
        const { problem, ...rest } = psm;
        return (
          <Problem
            key={index}
            problem={`#${index + 1}: ${problem}`}
            {...rest}
          />
        );
      })}
    </Box>
  );
}