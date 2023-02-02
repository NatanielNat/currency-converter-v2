
const Select = ({ currency, setCurrency,ratesData}) => (
    <div className="fieldset__currencyPlace">
        <label className="fieldset__label "><span className="fieldset__select js-currencyNow">{currency}</span></label>

        <select
            className="fieldset__input js-select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
        >
            {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                <option
                    key={currency}
                    value={currency}
                >
                    {currency}
                </option>
            )))};



        </select>
    </div>
);

export default Select;