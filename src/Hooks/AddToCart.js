import { useEffect, useState } from "react";
const useAddToCart = (product, user) => {
  useEffect(() => {
    const email = user?.user?.email;
  }, [user, product]);
};
export default useAddToCart;
