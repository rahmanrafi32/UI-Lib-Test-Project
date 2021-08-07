import IconPage from "../../assets/icons/Combined Shape 2.svg";
import IconAcc from "../../assets/icons/Combined Shape 3.svg";
import IconWeather from "../../assets/icons/Combined Shape 4.svg";
import IconVault from "../../assets/icons/Combined Shape 5.svg";
import IconSquare from "../../assets/icons/Combined Shape 6.svg";
import IconTouch from "../../assets/icons/Combined Shape(1).svg";
import IconList from "../../assets/icons/Combined Shape-1.svg";
import IconTable from "../../assets/icons/Combined Shape.svg";
import IconDash from "../../assets/icons/Group 25.svg";

const sidebarConfig = [
  { id: 1, title: "Dashboard", path: "/dashboard", icon: IconDash },
  { id: 2, title: "Table", path: "/table", icon: IconTable },
  { id: 3, title: "Lists", path: "/list", icon: IconList },
  { id: 4, title: "blog", path: "/blog", icon: IconPage },
  { id: 5, title: "Touch", path: "/touch", icon: IconTouch },
  { id: 6, title: "Profile", path: "/profile", icon: IconAcc },
  { id: 7, title: "Weather", path: "/weather", icon: IconWeather },
  { id: 8, title: "Page", path: "/page", icon: IconSquare },
  { id: 9, title: "Vault", path: "/vault", icon: IconVault },
];
export default sidebarConfig;
