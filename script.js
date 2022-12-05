const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector(".advice-generator__advice-number");
const adviceText = document.querySelector(".advice-generator__quote");
const generateBtn = document.querySelector(".advice-generator__btn");

const getAdvice = async () => {
  const response = await fetch(API_LINK);
  const data = await response.json();

  adviceNumber.textContent = `Advice #${data.slip.id}`;
  adviceText.textContent = `Advice #${data.slip.advice}`;
};

generateBtn.addEventListener("click", getAdvice);
