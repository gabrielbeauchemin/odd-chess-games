import { useHistory } from "react-router-dom";
import { Menu, Grid } from "antd";
const SubMenu = Menu.SubMenu;

const { useBreakpoint } = Grid;

//Reference: https://github.com/Rupinderthind/Ant_design_navbar/blob/master/src/App.js
const LeftMenu = () => {
  const { md } = useBreakpoint();
  const history = useHistory();
  return (
    <Menu mode={md ? "horizontal" : "inline"} className="main-background-color">
      <SubMenu key="sub1" title={<span>Games</span>}>
        <Menu.Item key="setting:1" onClick={() => history.push("/who-wins")}>
          Who wins?
        </Menu.Item>
        <Menu.Item key="setting:2" onClick={() => history.push("/is-it-draw")}>
          Is it draw?
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default LeftMenu;
