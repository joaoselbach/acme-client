import React from "react";
import { Switch } from "antd";

import * as Styled from "./styles";

const SwitchComponent = ({ value = false, onChange = () => {}, ...rest }) => {
  return (
    <Styled.MainSwitch>
      <div>
        <Switch
          value={value}
          defaultChecked={value}
          onChange={onChange}
          {...rest}
        />
      </div>
      <span>{value === true ? "Ativo" : "Inativo"}</span>
    </Styled.MainSwitch>
  );
};

export default SwitchComponent;
