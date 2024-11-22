import Fraction from "fraction.js";
import noImg from "../assets/img/no_img.jpg";

export const handleImgError = function (e) {
  e.target.src = noImg;
};

export const formatIngredient = function (
  amount,
  servings,
  numOfGuests,
  unit,
  name,
) {
  const totalAmount = (amount / servings) * numOfGuests;
  const integerPart = Math.trunc(totalAmount);
  const decimalPart = totalAmount - integerPart;

  const fractionPart =
    decimalPart > 0 ? new Fraction(decimalPart).toFraction(true) : "";

  return `${integerPart > 0 ? integerPart : ""} ${fractionPart} ${
    unit ? `${unit} of` : ""
  } ${name}`;
};

export const isRecipeBookmarked = ({ bookmarks, recipe }) =>
  bookmarks?.some((item) => item.id === recipe.id);
