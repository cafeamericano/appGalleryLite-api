const data = require("../data/analytics");

module.exports = {

    analyzeAssetBreakdown: function(req, res) {
        data.analyzeAssetBreakdown(req, res);
    },

    analyzeTimeline: function(req, res) {
        data.analyzeTimeline(req, res);
    }
    
}