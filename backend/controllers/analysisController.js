/* analysisController.js 

Controller for anyalis functions

*/


const mongoose = require('mongoose')
const Property = require('../models/propertyModel')
const Analysis = require('../models/analysisModel')


// get all analyses associated with a property
/*
const getAnalyses = async(req,res) => {
    
    // const property_id =
    
    const analyses = await Analysis.find({}).sortsort({createdAt: -1})

    res.status(200).json(analyses)

}
*/

/*
// get a single property
const getAnalysis = async (req, res) => {
    try {
      // Grab your search parameters
      const { id } = req.params;
  
      // verify that you received an object from the mongo server
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid property ID.' });
      }
  
      // Search for the intended property given the parameters
      const property = await Property.findById(id);
  
      // throw this error if you couldn't find the specific property you were searching for
      if (!property) {
        return res.status(404).json({ error: 'Property not found.' });
      }

      // if it passed the previous check, you foudn the property you were looking for so you receive
      // the response and pass it into a json object
      res.status(200).json(property);
    } catch (error) {
      console.error('Error retrieving property:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
*/

// create analysis
const createAnalysis = async (req,res) =>{

    // given the id of the property you want to add analysis to
    console.log("req.params:",req.params);

    // pass in the id of othe property you want to link this analysis to
    const {id} = req.params;


    const foundProperty = await Property.findById("661e0c5e585872d268e5d759");

    console.log("foundProperty:", foundProperty);
    

    const {
        PurchasePrice,
        AnnualPropertyTaxes,
        AmortizationPeriod,
        // Loan Details
        DownPaymentPercentage,
        LoanDuration,
        // Closing Costs
        TitleAndEscrowFees,
        OtherFees,
        // Income
        Rent,
        OtherIncome,
        // Future Assumptions
        RentEscalationPercentage,
        MarketApprecationPercentage,
        Inflation,
        PropertySalesCostsPercentage,
        // Monthly Expenses
        Electricity,
        Water,
        Sewer,
        Trash,
        HOA,
        MonthlyInsurance,
        VacanyPercentage,
        RepairsAndMaintenancePercentage,
        CapitalExpenditureMonthlyPercentage,
        PropertyManagementPercentage,
        // Uncertainty Range
        RentRangePercentage,
        VacancyRangePercentage,
        OngoingRepairCosts,
        CapitalExpenditureUncertaintyPercentage,
        PropertyManagementUncertaintyPercentage,
        Year1Input,
        Year2Input,
        Year3Input,
        Body,
        Author
     } = req.body

    console.log("formed req-body", req.body)


     let emptyFields = [];

     if(!PurchasePrice){
        emptyFields.push('PurchasePrice');
      }

      if(!AnnualPropertyTaxes){
        emptyFields.push('AnnualPropertyTaxes');
      }
      if(!AmortizationPeriod){
        emptyFields.push('AmortizationPeriod');
      }

      if(!DownPaymentPercentage){
        emptyFields.push('DownPaymentPercentage');
      }

      if(!LoanDuration){
        emptyFields.push('LoanDuration');
      }

      if(!TitleAndEscrowFees){
        emptyFields.push('TitleAndEscrowFees');
      }

      if(!OtherFees){
        emptyFields.push('OtherFees');
      }

      if(!Rent){
        emptyFields.push('Rent');
      }

      if(!OtherIncome){
        emptyFields.push('OtherIncome');
      }

      if(!RentEscalationPercentage){
        emptyFields.push('RentEscalationPercentage');
      }

      if(!MarketApprecationPercentage){
        emptyFields.push('MarketApprecationPercentage');
      }

      if(!Inflation){
        emptyFields.push('Inflation');
      }

      if(!PropertySalesCostsPercentage){
        emptyFields.push('PropertySalesCostsPercentage');
      }

      if(!Electricity){
        emptyFields.push('Electricity');
      }

      if(!Water){
        emptyFields.push('Water');
      }

      if(!Sewer){
        emptyFields.push('Sewer');
      }

      if(!Trash){
        emptyFields.push('Trash');
      }

      if(!HOA){
        emptyFields.push('HOA');
      }

      if(!MonthlyInsurance){
        emptyFields.push('MonthlyInsurance');
      }

      if(!VacanyPercentage){
        emptyFields.push('VacanyPercentage');
      }

      if(!RepairsAndMaintenancePercentage){
        emptyFields.push('RepairsAndMaintenance');
      }

      if(!CapitalExpenditureMonthlyPercentage){
        emptyFields.push('CapitalExpenditureMonthly');
      }

      if(!PropertyManagementPercentage){
        emptyFields.push('PropertyManagement');
      }

      if(!RentRangePercentage){
        emptyFields.push('RentRangePercentage');
      }

      if(!VacancyRangePercentage){
        emptyFields.push('VacancyRange');
      }

      if(!OngoingRepairCosts){
        emptyFields.push('OngoingRepairCosts');
      }

      if(!CapitalExpenditureUncertaintyPercentage){
        emptyFields.push('CapitalExpenditureUncertaintyPercentage');
      }

      if(!PropertyManagementUncertaintyPercentage){
        emptyFields.push('PropertyManagementUncertaintyPercentage');
      }

      if(!Year1Input){
        emptyFields.push('Year1Input');
      }

      if(!Year2Input){
        emptyFields.push('Year2Input');
      }

      if(!Year3Input){
        emptyFields.push('Year3Input');
      }

      try{
        console.log("attempting to form analysis object")
        //console.log("User id: ",user_id);
        const analysis = await Analysis.create({
            PurchasePrice,
            AnnualPropertyTaxes,
            AmortizationPeriod,
            // Loan Details
            DownPaymentPercentage,
            LoanDuration,
            // Closing Costs
            TitleAndEscrowFees,
            OtherFees,
            // Income
            Rent,
            OtherIncome,
            // Future Assumptions
            RentEscalationPercentage,
            MarketApprecationPercentage,
            Inflation,
            PropertySalesCostsPercentage,
            // Monthly Expenses
            Electricity,
            Water,
            Sewer,
            Trash,
            HOA,
            MonthlyInsurance,
            VacanyPercentage,
            RepairsAndMaintenancePercentage,
            CapitalExpenditureMonthlyPercentage,
            PropertyManagementPercentage,
            // Uncertainty Range
            RentRangePercentage,
            VacancyRangePercentage,
            OngoingRepairCosts,
            CapitalExpenditureUncertaintyPercentage,
            PropertyManagementUncertaintyPercentage,
            Year1Input,
            Year2Input,
            Year3Input,
            Body,
            Author
            //,user_id
        })

        console.log("foundProperty user_id", foundProperty.user_id);
        // put the user id as the author of this review
        analysis.Author = foundProperty.user_id;

        console.log("attempting to establish new analysis object to foundProperty")
        foundProperty.Analyses.push(analysis);
        console.log("attempted to push analysis to foundProperty")

        await analysis.save();
        console.log("attempted to save analysis")

        await foundProperty.save();

        //res.redirect(`/properties/$(foundProperty._id`);

        res.status(200).json(analysis)
      } catch (error){
          console.log('Error posting to server:'+error.message)
          res.status(400).json({error: error.message})
      }

}


const deleteAnalysis = async (req, res) => {
    try {

      const { id } = req.params;
      
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid analysis ID.' })
      }

      /*------------------------------------------

      find a way to pass in the property id

      */
      await Property.findByIdAndUpdate("661e0c5e585872d268e5d759", {$pull:{Analyses:id}})

      // given the id of the analysis that you want to delete,
      // first remove it from the property that you're 
  
      const analysis = await Analysis.findOneAndDelete({ _id: id })
  
      if (!analysis) {
        return res.status(404).json({ error: 'Analysis not found.' })
      }
  
      res.status(200).json(analysis);
    } catch (error) {
      console.error('Error deleting analysis:', error);
      res.status(500).json({ error: 'Internal Server Error' })
    }
}


// update a property
const updateAnalysis = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid property ID.' });
      }
  
      const allowedFields = [
        PurchasePrice,
        AnnualPropertyTaxes,
        AmortizationPeriod,
        // Loan Details
        DownPaymentPercentage,
        LoanDuration,
        // Closing Costs
        TitleAndEscrowFees,
        OtherFees,
        // Income
        Rent,
        OtherIncome,
        // Future Assumptions
        RentEscalationPercentage,
        MarketApprecationPercentage,
        Inflation,
        PropertySalesCostsPercentage,
        // Monthly Expenses
        Electricity,
        Water,
        Sewer,
        Trash,
        HOA,
        MonthlyInsurance,
        VacanyPercentage,
        RepairsAndMaintenancePercentage,
        CapitalExpenditureMonthlyPercentage,
        PropertyManagementPercentage,
        // Uncertainty Range
        RentRangePercentage,
        VacancyRangePercentage,
        OngoingRepairCosts,
        CapitalExpenditureUncertaintyPercentage,
        PropertyManagementUncertaintyPercentage,
        Year1Input,
        Year2Input,
        Year3Input,
        Body
        ];
    const updates = {};

    // Apply updates only for allowed fields
    for (const field of Object.keys(req.body)) {
      if (allowedFields.includes(field)) {
        updates[field] = req.body[field];
      }
    }
  
      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'No valid fields to update.' });
      }
  
      const analysis = await Analysis.findOneAndUpdate({ _id: id }, updates, {
        new: true,
      });
  
      if (!analysis) {
        return res.status(404).json({ error: 'Analysis not found.' });
      }
  
      res.status(200).json(property);
    } catch (error) {
      console.error('Error updating analysis:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



module.exports = {
    createAnalysis,
    deleteAnalysis,
    updateAnalysis

}