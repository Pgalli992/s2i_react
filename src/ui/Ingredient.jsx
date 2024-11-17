import Fraction from "fraction.js";

function Ingredient({ ingredients, servings, numOfGuests }) {
  const { id, amount, unit, name } = ingredients;
  return (
    <li key={id}>
      {amount
        ? (() => {
            const totalAmount = (amount / servings) * numOfGuests;
            const integerPart = Math.trunc(totalAmount);
            const decimalPart = totalAmount - integerPart;

            const fractionPart =
              decimalPart > 0 ? new Fraction(decimalPart).toFraction(true) : "";

            return `${integerPart > 0 ? integerPart : ""} ${fractionPart} ${
              unit ? `${unit} of` : ""
            } ${name}`;
          })()
        : name}
    </li>
  );
}

export default Ingredient;
