import { ICart } from "../../services/apiModel";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQuantityItem from "./UpdateQuantityItem";

type CarrtItemProps = {
  item: ICart;
};

function CartItem({ item }: CarrtItemProps) {
  const { name, quantity, totalPrice, pizzaId } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        {<p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>}

        <UpdateQuantityItem id={pizzaId} quantity={quantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
