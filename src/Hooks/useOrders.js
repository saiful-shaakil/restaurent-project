import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useOrders = (user) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://floating-thicket-52980.herokuapp.com/orders/${email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user, orders]);
  return [orders];
};
export default useOrders;
