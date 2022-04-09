import React from "react";
import { Button, Grid, Input } from "../elements";

const Upload = (props) => {
return(
    <React.Fragment>
        <Grid is_flex padding="15px 0">
        <input
          type="file"
        />
        {/* <Button margin="10px 0" backgroundColor="#ff9b64" width="30%" padding="10px">이미지 업로드</Button> */}
      </Grid>
    </React.Fragment>
)

}
export default Upload;