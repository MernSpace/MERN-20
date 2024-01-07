const {totalRevenueService,createService} = require("../services/SalesService");

exports.create = async (req, res) => {
    const result = await createService(req);
    res.status(200).json(result);
};

exports.totalRevenue = async (req, res) => {
  const result = await totalRevenueService(req);
  res.status(200).json(result);
};

