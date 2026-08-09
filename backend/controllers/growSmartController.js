const GrowSmart = require("../models/GrowSmart");


// Save GrowSmart Data
exports.saveGrowSmart = async (req, res) => {

  try {


    console.log("Received GrowSmart Data:", req.body);


    const growData = new GrowSmart(req.body);


    await growData.save();



    console.log("GrowSmart Data Saved Successfully");



    res.status(201).json({

      success: true,

      message: "GrowSmart data saved successfully",

      data: growData,

    });



  } catch (error) {


    console.log("GrowSmart Save Error:", error.message);



    res.status(500).json({

      success: false,

      message: error.message,

    });


  }

};





// Get GrowSmart History
exports.getGrowSmartHistory = async (req, res) => {


  try {


    const history = await GrowSmart
      .find()
      .sort({ createdAt: -1 });



    res.status(200).json({


      success: true,

      data: history,


    });



  } catch (error) {


    console.log("GrowSmart Fetch Error:", error.message);



    res.status(500).json({


      success: false,

      message: error.message,


    });



  }


};