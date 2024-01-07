const SalesModel = require("../Model/SalesModel");



exports.createService = async (req)=>{
  try{
    let postBody = req.body;
    let data = await SalesModel.create(postBody);
    return { status: "Success", data: data };
  }catch (e) {
    return { status: "Success", data: e };
  }

}





exports.totalRevenueService = async (req, res) => {
  try {
    const result = await SalesModel.find();

    let totalRevenue = 0;
    result.forEach((element) => {
      let sellQuantity = element["quantity"];
      let sale_price = element["sale_price"];
      let companyPrice = element["companyPrice"];
      let profit = parseFloat(sale_price) - parseFloat(companyPrice);
      let PerProductRev = parseFloat(sellQuantity) * profit;
      totalRevenue += PerProductRev;
    });
    return { status: "Success", data: totalRevenue };
  } catch (e) {
    return { status: "fail", error: e };
  }
};





