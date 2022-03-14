import React from "react";
import { Checkbox } from "antd";

import * as Styled from "./styles";

const SwitchComponent = ({ value = false, onChange = () => {}, ...rest }) => {
  return (
    <Styled.MainCheckbox>
      <div>
        <Checkbox
          value={value}
          defaultChecked={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    </Styled.MainCheckbox>
  );
};

export default SwitchComponent;
