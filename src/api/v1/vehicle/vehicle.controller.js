const Vehicle = require("../../../models/Vehicle")

exports.createVehicle = async (req, res) => {
  const { carModel, price, city, phone, maxPictures } = req.body
  const pictures = req.files.map(file => file.path);
  if (!pictures || pictures.length === 0) {
    return res.status(400).json({ message: 'At least one picture must be uploaded.' });
  }

  if (pictures.length > maxPictures) {
    return res.status(400).json({ message: `You can upload a maximum of ${maxPictures} pictures.` });
  }
  try {
    const vehicle = new Vehicle({
      carModel,
      price,
      city,
      phone,
      pictures,
      user: req.user.userId,
    })

    await vehicle.save()

    res.status(201).json({
      message: "Vehicle created successfully",
      vehicle,
    })
  } catch (error) {
    console.error("Error creating vehicle:", error)
    res.status(500).json({ message: "Server error" })
  }
}
