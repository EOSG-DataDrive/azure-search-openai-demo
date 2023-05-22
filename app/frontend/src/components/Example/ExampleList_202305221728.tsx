import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

// duplicate for 3 categories: situational awareness, integrated reports, ...
// have multiple examples per category
// include in three sep. drowdowns
const EXAMPLES: ExampleModel[] = [
    {
        text: "What is included in my Northwind Health Plus plan that is not in standard?",
        value: "What is included in my Northwind Health Plus plan that is not in standard?"
    },
    { text: "What happens in a performance review?", value: "What happens in a performance review?" },
    { text: "What does a Product Manager do?", value: "What does a Product Manager do?" }
];

const EXAMPLES_SituationalAwareness: ExampleModel[] = [
    {
        text: "SituationalAwareness Q1?",
        value: "SituationalAwareness Q1?"
    },
    { text: "SituationalAwareness Q2?", value: "SituationalAwareness Q2?" },
    { text: "SituationalAwareness Q3?", value: "SituationalAwareness Q3?" }
];

const EXAMPLES_IntegratedReports: ExampleModel[] = [
    {
        text: "IntegratedReports Q1?",
        value: "IntegratedReports Q1?"
    },
    { text: "IntegratedReports Q2?", value: "IntegratedReports Q2?" },
    { text: "IntegratedReports Q3?", value: "IntegratedReports Q3?" }
];

const EXAMPLES_RiskPrevention: ExampleModel[] = [
    {
        text: "RiskPrevention Q1?",
        value: "RiskPrevention Q1?"
    },
    { text: "RiskPrevention Q2?", value: "RiskPrevention Q2?" },
    { text: "RiskPrevention Q3?", value: "RiskPrevention Q3?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
