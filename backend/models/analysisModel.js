/* 

analysisModel.js

// provide the structure of an analysis object to be stored
// in the mongodb

*/

const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');
const Schema = mongoose.Schema;

/*

property schema already contains the following parameters:

- Address
    - StreetNumber
    - StreetName
- City
- StateOrProvince
- PostalCode
- ListPrice
- LivingArea (Sq ft)
- BedroomsTotal
- BathroomsTotal Decimal
- user_id

*/

const analysisSchema = new Schema({
    // Puchase Info
    PurchasePrice: {
        type: Number,
        require:true,
        default:350000
    },
    AnnualPropertyTaxes:{
        type: Number,
        require:true,
        default:3000
    },
    AmortizationPeriod:{
        type: Number,
        require:true,
        default: 28
    },
    // Loan Details
    DownPaymentPercentage:{
        type:Number,
        require: true,
        default: 15
    },
    LoanDuration:{
        type: Number,
        require: true,
        default:30
    },
    // Closing Costs
    TitleAndEscrowFees:{
        type: Number,
        require: true,
        default:2000
    },
    OtherFees:{
        type: Number,
        require: true,
        default:4000
    },
    // Income
    Rent:{
        type:Number,
        require:true,
        default:3500
    },
    OtherIncome:{
        type:Number,
        require:true,
        default:0
    },
    // Future Assumptions
    RentEscalationPercentage:{
        type:Number,
        require:true,
        default: 3
    },
    MarketApprecationPercentage:{
        type:Number,
        require:true,
        default: 3
    },
    Inflation:{
        type:Number,
        require:true,
        default:3
    },
    PropertySalesCostsPercentage:{
        type:Number,
        require:true,
        default: 10
    },
    // Monthly Expenses
    Electricity:{
        type:Number,
        require:true,
        default: 0
    },
    Water:{
        type:Number,
        require:true,
        default: 0
    },
    Sewer:{
        type:Number,
        require:true,
        default: 180
    },
    Trash:{
        type:Number,
        require:true,
        default:100
    },
    HOA:{
        type:Number,
        require:true,
        default: 0
    },
    MonthlyInsurance:{
        type:Number,
        require:true,
        default: 226
    },
    VacanyPercentage:{
        type:Number,
        require:true,
        default: 5
    },
    RepairsAndMaintenancePercentage:{
        type:Number,
        require:true,
        default: 8
    },
    CapitalExpenditureMonthlyPercentage:{
        type:Number,
        require:true,
        default: 5
    },
    PropertyManagementPercentage:{
        type:Number,
        require:true,
        default: 10
    },
    // Uncertainty Range
    RentRangePercentage:{
        type:Number,
        require:true,
        default: 5
    },
    VacancyRangePercentage:{
        type:Number,
        require:true,
        default:6
    },
    OngoingRepairCostsPercentage:{
        type:Number,
        require:true,
        default:4
    },
    CapitalExpenditureUncertaintyPercentage:{
        type:Number,
        require:true,
        default:10
    },
    PropertyManagementUncertaintyPercentage:{
        type: Number,
        require: true,
        default: 8
    },
    // Market Cases
    Year1Input:{
        type:Number,
        require:true,
        default:3
    },
    Year2Input:{
        type:Number,
        require:true,
        default: 5
    },
    Year3Input:{
        type:Number,
        require:true,
        default: 7
    },
    // author input information
    Body:{
        type:String
    },
    Author:{
        type: String,
        required: true
    }
    /*
    Author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    */
    
 
},{timestamps: true})

module.exports = mongoose.model('Analysis', analysisSchema)