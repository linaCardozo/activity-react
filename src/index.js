import React from "react";
import ReactDOM from "react-dom";
import CreateForm from "./createform";

import form from "./form.json"

ReactDOM.render(<CreateForm form={form}/>, document.getElementById("root"));
