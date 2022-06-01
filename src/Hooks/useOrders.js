import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useOrders = (user) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/orders/${email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user, orders]);
  return [orders];
};
export default useOrders;
