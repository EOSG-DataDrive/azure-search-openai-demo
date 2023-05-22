import React, { useState } from "react";
import { Example } from "./Example";
import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const SituationalAwarenessExamples: ExampleModel[] = [
    {
        text: "What were the most recent political events regarding the situation in Ukraine?",
        value: "What were the most recent political events regarding the situation in Ukraine?"
    },
    {
        text: "Summarize the events around the Nigerian elections in 2019.",
        value: "Summarize the events around the Nigerian elections in 2019."
    },
    {
        text: "Decsribe the main events regarding the Cholera outbreak in Haiti.",
        value: "Decsribe the main events regarding the Cholera outbreak in Haiti."
    }
    // Add more examples for Situational Awareness category as needed
];

const IntegratedReportsExamples: ExampleModel[] = [
    {
        text: "Example 1 for Integrated Reports",
        value: "Example 1 for Integrated Reports"
    },
    {
        text: "Example 2 for Integrated Reports",
        value: "Example 2 for Integrated Reports"
    },
    {
        text: "Example 3 for Integrated Reports",
        value: "Example 3 for Integrated Reports"
    }
    // Add more examples for Integrated Reports category as needed
];

const ThirdCategoryExamples: ExampleModel[] = [
    {
        text: "Example 1 for Third Category",
        value: "Example 1 for Third Category"
    },
    {
        text: "Example 2 for Third Category",
        value: "Example 2 for Third Category"
    },
    {
        text: "Example 3 for Third Category",
        value: "Example 3 for Third Category"
    }
    // Add more examples for the third category as needed
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    const [isSituationalAwarenessExpanded, setSituationalAwarenessExpanded] = useState(false);
    const [isIntegratedReportsExpanded, setIntegratedReportsExpanded] = useState(false);
    const [isThirdCategoryExpanded, setThirdCategoryExpanded] = useState(false);

    const toggleSituationalAwareness = () => {
        setSituationalAwarenessExpanded(!isSituationalAwarenessExpanded);
    };

    const toggleIntegratedReports = () => {
        setIntegratedReportsExpanded(!isIntegratedReportsExpanded);
    };

    const toggleThirdCategory = () => {
        setThirdCategoryExpanded(!isThirdCategoryExpanded);
    };

    return (
        <>
            <div onClick={toggleSituationalAwareness}>
                <h2>Situational Awareness Examples</h2>
            </div>
            {isSituationalAwarenessExpanded && (
                <ul className={styles.examplesNavList}>
                    {SituationalAwarenessExamples.map((x, i) => (
                        <li key={i}>
                            <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                        </li>
                    ))}
                </ul>
            )}

            <div onClick={toggleIntegratedReports}>
                <h2>Integrated Reports Examples</h2>
            </div>
            {isIntegratedReportsExpanded && (
                <ul className={styles.examplesNavList}>
                    {IntegratedReportsExamples.map((x, i) => (
                        <li key={i}>
                            <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                        </li>
                    ))}
                </ul>
            )}

            <div onClick={toggleThirdCategory}>
                <h2>Third Category Examples</h2>
            </div>
            {isThirdCategoryExpanded && (
                <ul className={styles.examplesNavList}>
                    {ThirdCategoryExamples.map((x, i) => (
                        <li key={i}>
                            <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
