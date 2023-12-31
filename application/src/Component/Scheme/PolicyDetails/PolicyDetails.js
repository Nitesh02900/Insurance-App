import React, {useState} from 'react'

const PolicyDetails = ({value}) => {

    const [maxAmount, setMaxAmount] = useState(value?.maxAmount || "");
    const [minAmount, setMinAmount] = useState(value?.minAmount || "");
    const [minAge, setMinAge] = useState(value?.minAge || "");
    const [maxAge, setMaxAge] = useState(value?.maxAge || "");
    const [minTime, setMinTime] = useState(value?.minTime || "");
    const [maxTime, setMaxTime] = useState(value?.maxTime || "");
    const [profitRatio, setProfitRatio] = useState(value?.profitRatio || "");

    // const [maxAmount, setMaxAmount] = useState(value.maxAmount);
    // const [minAmount, setMinAmount] = useState(value.minAmount);
    // const [minAge, setMinAge] = useState(value.minAge);
    // const [maxAge, setMaxAge] = useState(value.maxAge);
    // const [minTime, setMinTime] = useState(value.minTime);
    // const [maxTime, setMaxTime] = useState(value.maxTime);
    // const [profitRatio, setProfitRatio] = useState(value.profitRatio);
  
    
    // const [maxAmount, setMaxAmount] = useState();
    // const [minAmount, setMinAmount] = useState();
    
    // const [minAge, setMinAge] = useState();
    // const [maxAge, setMaxAge] = useState();
    // const [minTime, setMinTime] = useState();
    // const [maxTime, setMaxTime] = useState();
    // const [profitRatio, setProfitRatio] = useState();
  


    const [noOfYear, setNoOfYear] = useState(0); // or some other default value
    const [totalInvestmentAmount, setTotalInvestmentAmount] = useState(0); // or some other default value
    const [premiumType, setPremiumType] = useState(0); // or some other default value
    
    // const [installmentAmount, setInstallmentAmount] = useState();
    // const [interestAmount, setInterestAmount] = useState();
    // const [totalAmount, setTotalAmount] = useState();

    // const calculateInterest = () => {
    //     let noOfInstallment= (noOfYear*12)/premiumType
    //     setInstallmentAmount(totalInvestmentAmount/noOfInstallment)
    //     let interest=(profitRatio/100)*totalInvestmentAmount
    //     setInterestAmount((profitRatio/100)*totalInvestmentAmount)
    //     let sum  =(interest*noOfYear)+totalInvestmentAmount
    //     setTotalAmount(sum)
    // };
    const calculateInterest = () => {
        // Parse input values to numbers
        const parsedNoOfYear = parseFloat(noOfYear);
        const parsedTotalInvestmentAmount = parseFloat(totalInvestmentAmount);
        const parsedPremiumType = parseFloat(premiumType);
    
        // Check if parsing is successful
        if (isNaN(parsedNoOfYear) || isNaN(parsedTotalInvestmentAmount) || isNaN(parsedPremiumType)) {
            // Handle error or show a message to the user
            console.error("Invalid input. Please enter valid numbers.");
            return;
        }
    
        const noOfInstallment = (parsedNoOfYear * 12) / parsedPremiumType;
        setInstallmentAmount(parsedTotalInvestmentAmount / noOfInstallment);
    
        const interest = (profitRatio / 100) * parsedTotalInvestmentAmount;
        setInterestAmount(interest);
    
        const sum = interest * parsedNoOfYear + parsedTotalInvestmentAmount;
        setTotalAmount(sum);
    };
    


  return (
    <>
    
        <h1 className='investment-heading' style={{textAlign:"center"}}>Investment Details</h1>
        <div className="investment-blur" style={{ background: "rgb(238 210 255)" }}></div>
        <form className='investment-postdata'>
            {console.log(value)}
            <div className='investment-form-group'>
                <label htmlFor="investmentAmount">Minimum Investment Amount *</label>
                <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="investmentAmount"
                    value={minAmount}
                
                    required
                />
            </div>
            <div className='investment-form-group'>
                <label htmlFor="investmentAmount">Maximum Investment Amount *</label>
                <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="investmentAmount"
                    value={maxAmount}
                    required
                />
            </div>
            <div className='investment-form-group'>
                <label htmlFor="minAge">Minimum Age *</label>
                <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="minAge"
                    value={minAge}
                    required
                />
            </div>
            <div className='investment-form-group'>
                <label htmlFor="maxAge">Maximum Age *</label>
                <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="maxAge"
                    value={maxAge}
                    onChange={(e) => setMaxAge(e.target.value)}
                    required
                />
            </div>
            <div className='investment-form-group'>
                <label htmlFor="minPolicyTerm">Minimum Policy Term *</label>
                <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="minPolicyTerm"
                    value={minTime}
                    onChange={(e) => setMinTime(e.target.value)}
                    required
                />
            </div>
            <div className='investment-form-group'>
                <label htmlFor="maxPolicyTerm">Maximum Policy Term *</label>
                <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="maxPolicyTerm"
                    value={maxTime}
                    onChange={(e) => setMaxTime(e.target.value)}
                    required
                />
            </div>
            <div className='investment-form-group'>
                <label htmlFor="profitRatio">Profit Ratio *</label>
                <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="profitRatio"
                    value={profitRatio}
                    onChange={(e) => setProfitRatio(e.target.value)}
                    required
                />
            </div>
        </form>

            <h4 className='investment-heading' style={{textAlign:"center"}}>Interest Calculate</h4>
            <form className='investment-postdata'>
                <div className='investment-form-group'>
                    <label htmlFor="noOfYear">Number of year*</label>
                    <input
               
                        type="text"
                        className="form-control"
                        id="noOfYear"
                        value={noOfYear}
                        onChange={(e) => setNoOfYear(e.target.value)}
                    
                        required
                    />
                </div>
                <div className='investment-form-group'>
                    <label htmlFor="totalInvestmentAmount">Total Investment Amount *</label>
                    <input
                        
                        type="text"
                        className="form-control"
                        id="totalInvestmentAmount"
                        value={totalInvestmentAmount}
                        onChange={(e) => setTotalInvestmentAmount(e.target.value)}
                        required
                    />
                </div>
                <div className='investment-form-group'>
                    <label htmlFor="premiumType">Premium Type *</label>
                    <input
                        
                        type="text"
                        className="form-control"
                        id="premiumType"
                        value={premiumType}
                        onChange={(e) => setPremiumType(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:"1rem"}}>
                    <button  type="button"  onClick={calculateInterest}>
                        Calculate
                    </button>
                </div>
            </form>

            <form className='investment-postdata'>
                <div className='investment-form-group'>
                    <label htmlFor="installmentAmount">Installment Amount*</label>
                    <input
                        disabled={true}
                        type="text"
                        className="form-control"
                        id="installmentAmount"
                        value={installmentAmount}
                        
                    
                        required
                    />
                </div>
                <div className='investment-form-group'>
                    <label htmlFor="interestAmount">Interest Amount *</label>
                    <input
                        disabled={true}
                        type="text"
                        className="form-control"
                        id="Interest Amount"
                        value={interestAmount}
                        required
                    />
                </div>
                <div className='investment-form-group'>
                    <label htmlFor="totalAmount">Total Amount *</label>
                    <input
                        disabled={true}
                        type="text"
                        className="form-control"
                        id="totalAmount"
                        value={totalAmount}
                       
                        required
                    />
                </div>
                
            </form>
            


        
        
            {/* onClick={submitInvestmentDetails} */}
    </>
  )
}

export default PolicyDetails
