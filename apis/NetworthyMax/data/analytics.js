const queryExecutor = require("./_queryExecutor");
const moment = require("moment");
let db = require('../config/connection')

module.exports = {

    analyzeAssetBreakdown: function (req, res) {

        //Define the SQL query
        var sql = `
          SELECT 
            sources.source_name, 
            entries.amount, 
            entries.entry_date, 
            sources.type
          FROM 
            sources
          JOIN 
            entries 
          ON 
            sources.uuid = entries.source_uuid
          WHERE 
            entries.user_uuid = '${req.params.userid}'
          ORDER BY 
            entries.entry_date DESC;
        `;
        
        //Handle the response
        db.query(sql, function(err, result) {

          //Find the latest values for each source
          let x = result;
          let customResponse = [];
          let uniqueSources = [];

          //Create an array of unique sources, then 
          for (var i = 0; i < x.length; i++) {
            if (uniqueSources.indexOf(x[i].source_name) === -1) {
            let y = {};
            (y.source_name = x[i].source_name),
              (y.amount = x[i].amount),
              (y.entry_date = x[i].entry_date),
              (y.type = x[i].type);
            customResponse.push(y);
            }
            uniqueSources.push(x[i].source_name);
          }

          //Tally for frozen and liquid
          let currentLiquidValue = 0;
          let currentFrozenValue = 0;

          //For each liquid asset, increase value for currentLiquidValue; do the same for customFrozenValue
          for (var i = 0; i < customResponse.length; i++) {
            if (customResponse[i].type === "Liquid Asset") {
            currentLiquidValue += customResponse[i].amount;
            } else if (customResponse[i].type === "Frozen Asset") {
            currentFrozenValue += customResponse[i].amount;
            }
          }
          
          //Make a final response
          let finalResponse = {};
          finalResponse.currentLiquidValue = currentLiquidValue;
          finalResponse.currentFrozenValue = currentFrozenValue;
          
          //Send response to the front end
          res.json(finalResponse);
          
        });
    },

    analyzeTimeline: function (req, res) {

        function makeMonthString(argObj) {
            return moment(argObj.entry_date).format('YYYY-MM');
          }
      
          var sql = `
                SELECT 
                    sources.source_name, 
                    entries.amount, 
                    entries.entry_date, 
                    sources.type, 
                    entries.user_uuid
                FROM 
                    sources
                JOIN 
                    entries 
                ON 
                    sources.uuid = entries.source_uuid
                WHERE 
                    entries.user_uuid = '${req.params.userid}'
                ORDER BY 
                    entries.entry_date DESC
          `;
      
          db.query(sql, function(err, result) {
            //Find the latest values for each source
            let allEntries = result;
      
            //Find out all of the months logged by the user
            let encounteredMonths = [];
            for (var i = 0; i < allEntries.length; i++) {
              let month = makeMonthString(allEntries[i]);
              if (encounteredMonths.indexOf(month) === -1) {
                encounteredMonths.push(month);
              }
            }
      
            //For every month on file
            let responseObj = [];
      
            for (let i = 0; i < encounteredMonths.length; i++) {
                //Create new month object
              let singleMonthObj = {
                month: encounteredMonths[i],
                liquid: [],
                frozen: [],
                liabilities: []
              };
      
              //Push in each transaction into the appropriate category
              for (let j = 0; j < allEntries.length; j++) {
                let entryMonth = moment(allEntries[j].entry_date).format('YYYY-MM');

                if (entryMonth === singleMonthObj.month) {
                  if (allEntries[j].type === "Liquid Asset") {
                    let newObj = {};
                    newObj.source_name = allEntries[j].source_name;
                    newObj.type = allEntries[j].type;
                    newObj.amount = allEntries[j].amount;
                    newObj.entry_date = allEntries[j].entry_date;
                    singleMonthObj.liquid.push(newObj);
                  }
                  if (allEntries[j].type === "Frozen Asset") {
                    let newObj = {};
                    newObj.source_name = allEntries[j].source_name;
                    newObj.type = allEntries[j].type;
                    newObj.amount = allEntries[j].amount;
                    newObj.entry_date = allEntries[j].entry_date;
                    singleMonthObj.frozen.push(newObj);
                  }
                  if (allEntries[j].type === "Liability") {
                    let newObj = {};
                    newObj.source_name = allEntries[j].source_name;
                    newObj.type = allEntries[j].type;
                    newObj.amount = allEntries[j].amount;
                    newObj.entry_date = allEntries[j].entry_date;
                    singleMonthObj.liabilities.push(newObj);
                  }

                }
              }
              responseObj.push(singleMonthObj);
            }

            let finalResponse = [];
            for (let i = 0; i < responseObj.length; i++) {
              let myObj = {
                month: responseObj[i].month,
                liquidsAccum: 0,
                frozensAccum: 0,
                liabilitiesAccum: 0
              };
              let x = responseObj[i];
              let liquids = x.liquid;
              let frozens = x.frozen;
              let liabilities = x.liabilities;
      
              for (let j = 0; j < liquids.length; j++) {
                myObj.liquidsAccum += liquids[j].amount;
              }
              for (let j = 0; j < frozens.length; j++) {
                myObj.frozensAccum += frozens[j].amount;
              }
              for (let j = 0; j < liabilities.length; j++) {
                myObj.liabilitiesAccum += liabilities[j].amount;
              }

              finalResponse.push(myObj);
            }
            res.json(finalResponse);
          });
        
    }

}