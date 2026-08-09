
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


    // Check existing email first
    const existingMember = await Community.findOne({
      email: req.body.email
    });

    if (existingMember) {

      console.log("ALREADY A MEMBER");

      return res.status(400).json({
        message: "ℹ️ You are already a member of the community."
      });

    }


    // Create new member
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


    await member.save();


    console.log("MEMBER SAVED SUCCESSFULLY");


    return res.status(201).json({

      message: "🌱 Successfully joined the community.",

      member: member

    });

  }


  catch (err) {

    // IMPORTANT:
    // Never send MongoDB E11000 error to frontend

    if (err && err.code === 11000) {

      console.log("DUPLICATE EMAIL");

      return res.status(400).json({

        message:
          "ℹ️ You are already a member of the community."

      });

    }


    console.log(
      "COMMUNITY ERROR:",
      err.message
    );


    return res.status(500).json({

      message:
        "Failed to join community. Please try again."

    });

  }

};


// ===============================
// GET ALL COMMUNITY MEMBERS
// ===============================

exports.getMembers = async (req, res) => {

  try {

    const members = await Community.find();

    return res.status(200).json(members);

  }

  catch (err) {

    console.log(
      "GET MEMBERS ERROR:",
      err.message
    );

    return res.status(500).json({

      message:
        "Failed to fetch community members."

    });

  }

};

