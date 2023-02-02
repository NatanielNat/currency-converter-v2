import Result from "./Result"
import Select from "./Select"
import Header from "./Header"
import { useState, useEffect } from "react"
import { Button,Loading,Failure} from "./styled"
import { useRatesData } from "./useRatesData"
import { Clock } from "./Clock";


function App() {

  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("AED");
  const [amount, setAmount] = useState("");

  const onButtonClick = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };





  return (
    <>
      <form className="js-form">
        <div className="container">
          <Header />
          < Clock />
          <fieldset className="fieldset">
            <legend className="fieldset_legend">Currency Convert</legend>
            {ratesData.state === "loading"
              ? (
                <Loading>
                  <p>Sekunda.... <br /> musi sie wszystko zaladowac</p>
                </Loading>
              )
              : ratesData.state === "error" ?
                (
                  <Failure>
                    Hmmmm.... cos poszlo nie tak.
                  </Failure>
                ):
                  (
                <>
            <div className="fieldset__currencyPlace">
              <label className="fieldset__label ">PLN</label>
              <input
                type="number"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                className="fieldset__input js-amount"
              />
            </div>
            <Select
              ratesData={ratesData}
              currency={currency}
              setCurrency={setCurrency}
            />
            <Button className="submitButton"
              onClick={onButtonClick}

            > Submit </Button>
            <Result
              result={result} />
              </>
            )}
          </fieldset>
        </div>
      </form>
    </>
  );
};

export default App;
