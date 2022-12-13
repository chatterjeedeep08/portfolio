import React from "react";

function template() {
  return (
    <Card sx={{ minWidth: 275, margin:5}}>
        <CardContent>
            <Typography variant="h4">
                <span role="img" aria-label="white-circle">⚪</span>
                Template:
            </Typography>
            <br/>
            {/*Add whatever you need to add here*/}
        </CardContent>
    </Card>
  );
}
export default template;