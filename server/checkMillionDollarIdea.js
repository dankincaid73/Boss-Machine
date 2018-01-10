// Make sure numWeeks * weeklyRevenue is greater than 1000000
const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
  if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
}

// Export checkMillionDollarIdea
module.exports = checkMillionDollarIdea;
