/*
    Author: Ruizi Han

    Example animation and code of while loop.
*/

import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import AnimationWithCode from '../../../../../components/AnimationWithCode/AnimationWithCode';
import { useStyles } from './Style';

// dynamic pseudocode
const Code = (props) => {
    const { blockNum } = props;

    const useStyles = makeStyles((theme) => ({
        background: {
            backgroundColor: "#c8e6c9",
            borderRadius: 5,
            marginTop: -6,
            letterSpacing: 0.5,
            fontFamily: "Space Mono",
            lineHeight: "22px",
            fontSize: "12px",
            paddingLeft: "5px",
        },
        noBackground: {
            marginTop: -6,
            letterSpacing: 0.5,
            fontFamily: "Space Mono",
            lineHeight: "22px",
            fontSize: "12px",
            paddingLeft: "5px",
        },
    }));

    const classes = useStyles();

    // pseudocode of while loop example
    const whileCode =
        <div>
            <pre className={blockNum === 1 ? classes.background : classes.noBackground}>
                {`Algorithm: WhileLoop()`}
            </pre>
            <pre className={classes.noBackground}>
                {`  i = 0`}
            </pre>
            <pre className={classes.noBackground}>
                {`  a = 0`}
            </pre>
            <pre className={classes.noBackground}>
                {`  b = 2`}
            </pre>
            <pre className={blockNum === 2 ? classes.background : classes.noBackground}>
                {`  while i < 4 do`}
            </pre>
            <pre className={blockNum === 3 ? classes.background : classes.noBackground}>
                {`     a = a + b`}
            </pre>
            <pre className={blockNum === 4 ? classes.background : classes.noBackground}>
                {`     i = i + 1`}
            </pre>
            <pre className={blockNum === 5 ? classes.background : classes.noBackground}>
                {`  end while`}
            </pre>
        </div>

    return (
        <div>{whileCode}</div>
    )
}

const width = 320;
export default function ForLoop() {
    // produce trace, description and blockNums
    var traceUnit = [];
    var descriptionUnit = '';

    var trace = [
        [
            { value: 'i=0', height: 0, backgroundColor: "#FFD700", key: 0, y: 0 },
            { value: 'a=0', height: 0, backgroundColor: "#00BFFF", key: 1, y: 0 },
            { value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0 }
        ]
    ];
    var description = ['Begin while loop'];
    var blockNums = [1];

    for (var i = 1; i < 5; i++) {
        traceUnit = [
            { value: 'i=' + (i - 1), height: (i - 1) * 10, backgroundColor: "#FFD700", key: 0, y: 0 },
            { value: 'a=' + (i - 1) * 2, height: (i - 1) * 20, backgroundColor: "#00BFFF", key: 1, y: 0 },
            { value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0 }
        ];
        trace.push(traceUnit);
        traceUnit = [
            { value: 'i=' + (i - 1), height: (i - 1) * 10, backgroundColor: "#FFD700", key: 0, y: 0 },
            { value: 'a=' + i * 2, height: i * 20, backgroundColor: "#00BFFF", key: 1, y: 0 },
            { value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0 }
        ];
        trace.push(traceUnit);
        traceUnit = [
            { value: 'i=' + i, height: i * 10, backgroundColor: "#FFD700", key: 0, y: 0 },
            { value: 'a=' + i * 2, height: i * 20, backgroundColor: "#00BFFF", key: 1, y: 0 },
            { value: 'b=2', height: 20, backgroundColor: "#00BFFF", key: 2, y: 0 }
        ];
        trace.push(traceUnit);

        blockNums.push(2, 3, 4);

        descriptionUnit = 'i = ' + (i - 1) + ', i < 4 is true';
        description.push(descriptionUnit, 'do a = a + b', 'do i = i + 1');

        if (i === 4) {
            trace.push(traceUnit);
            blockNums.push(5);
            description.push('i = 4, i < 4 is false, jump out of the loop');
        }
    }

    const props = {
        trace,
        description,
        width,
        blockNums,
        useStyles,
        Code,
        title: "While Loop",
    };

    return (<AnimationWithCode {...props} />);
}