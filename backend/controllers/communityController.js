const Community = require("../models/Community");


// ===============================
// JOIN COMMUNITY
// ===============================

exports.joinCommunity = async (req, res) => {

  try {

    console.log("=================================");
    console.log("COMMUNITY JOIN REQUEST");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    console.log("=================================");


    const member = new Community({

      name: req.body.name,

      email: req.body.email,

      city: req.body.city,

      gardenType: req.body.gardenType,

      experience: req.body.experience,

      image: req.file
        ? `/uploads/${req.file.filename}`
        : ""

    });


    console.log("SAVING MEMBER:", member);


    await member.save();


    console.log("MEMBER SAVED SUCCESSFULLY:", member);


    res.status(201).json({

      message: "Community member added successfully",

      member: member

    });

  }

  catch (err) {

    console.log("=================================");
    console.log("COMMUNITY ERROR:", err);
    console.log("=================================");


    res.status(500).json({

      message: err.message

    });

  }

};




// ===============================
// GET ALL COMMUNITY MEMBERS
// ===============================

exports.getMembers = async (req, res) => {

  try {

    const members = await Community.find();

    console.log(
      "COMMUNITY MEMBERS:",
      members
    );


    res.status(200).json(members);

  }

  catch (err) {

    console.log(
      "GET MEMBERS ERROR:",
      err
    );


    res.status(500).json({

      message: err.message

    });

  }

};