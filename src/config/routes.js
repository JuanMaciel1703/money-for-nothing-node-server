const express = require('express')

module.exports = function(server) {
    // Base Route
    const router = express.Router()
    server.use('/api', router)

    // BillingCylces Routes
    const BillingCylces = require('../api/billingCycle/billingCycleService')
    BillingCylces.register(router, '/billingCycles')
}