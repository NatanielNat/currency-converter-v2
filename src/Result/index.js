import React from "react"

const Result = ({ result }) => (
    <div className="fieldset__convertPlace">
        {result !== undefined && (
            <>
                <strong className="fieldset__result js-result">{result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.currency}</strong>
            </>
        )}
    </div>
);

export default Result;