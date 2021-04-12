/*
    Author: Yani Huang
*/
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function IfThenElse(props) {
    const styles = {
        root: {
            display: "flex",
            "& > *": {
                marginRight: 10,
            },
            backgroundColor: "#EFEFEF",
            height: "525px",
            width: "750px",
            marginLeft: "15px",
        },
        title: {
            fontSize: 20,
            textAlign: "center",
        },
        subtitle: {
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: "20px",
        },
        div: {
            fontSize: 15,
            lineHeight: "2em",
            fontWeight: "400",
            marginLeft: "20px",
        },
        sample: {
            fontSize: 14,
            lineHeight: "2em",
            fontWeight: "400",
            backgroundColor: "white",
            borderRadius: "15px",
            paddingLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginLeft: "260px",
            marginTop: "20px",
            marginBottom: "20px",
            width: "200px",
            fontFamily: "Space Mono",
        },
        ExampleCard: {
            paddingLeft: "5px",
            paddingTop: "5px",
            marginLeft: "270px",
            width: "200px",
            backgroundColor: "#FFFFFF",
        },
    };

    return (
        <div>
            <Card style={styles.root}>
                <CardContent>
                    <h1 style={styles.title}>if-then-else</h1>
                    <br></br>
                    <div style={styles.div}>
                        Binary choice on a given Boolean condition is indicated
                        by the use of four keywords:{" "} 
                        <font style={{ fontWeight: "bold" }}>if</font>,{" "}
                        <font style={{ fontWeight: "bold" }}>then</font>,{" "}
                        <font style={{ fontWeight: "bold" }}>else</font> and{" "}
                        <font style={{ fontWeight: "bold" }}>end if</font>.
                        The general form is:
                    </div>
                    <br></br>
                    <br></br>

                    <div style={styles.sample}>
                        <font style={{ fontWeight: "bold" }}>if</font> condition{" "}
                        <font style={{ fontWeight: "bold" }}>then</font><br></br>sequence 1<br></br>
                        <font style={{ fontWeight: "bold" }}>else</font>
                        <br></br>sequence 2<br></br>
                        <font style={{ fontWeight: "bold" }}>end if</font>
                    </div>

                    <br></br>
                    <br></br>
                    <div style={styles.div}>
                        The <font style={{ fontWeight: "bold" }}>else</font> keyword and <font style={{ fontWeight: "bold" }}>sequence 2</font> are optional. If the
                        condition is true, sequence 1 is performed, otherwise
                        sequence 2 is performed.
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}