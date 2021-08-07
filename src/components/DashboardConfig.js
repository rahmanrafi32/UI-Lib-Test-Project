import expenseIcon from "../assets/icons/expense.svg";
import orderIcon from "../assets/icons/orders.svg";
import salesIcon from "../assets/icons/sales.svg";
import userIcon from "../assets/icons/user.svg";

const dashboardConfig = [
  {
    icon: userIcon,
    title: "New Leds",
    quantity: 205,
    backgroundColor:'#F2F1FE',
    textColor:'#663399'
  },
  {
    icon: salesIcon,
    title: "Sales",
    quantity: 4201,
    backgroundColor:'#C5DBFF',
    textColor:'#3981F7'
  },
  {
    icon: orderIcon,
    title: "Orders",
    quantity: 80,
    backgroundColor:'#BCDDB3',
    textColor:'#5DAE49'
  },
  {
    icon: expenseIcon,
    title: "Expense",
    quantity: 1200,
    backgroundColor:'#FFF6E0',
    textColor:'#FFC620'
  },
];

export default dashboardConfig;
