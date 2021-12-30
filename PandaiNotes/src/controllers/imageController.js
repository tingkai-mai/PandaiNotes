const Image = require("./../models/imageModel");

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json({
      status: "success",
      data: {
        images: images,
        links: images.map((el) => el.link),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occured!",
    });
  }
};

exports.getImage = async (req, res) => {
  try {
    const image = await Image.findOne({ name: req.body.imageName });
    res.status(200).json({
      status: "success",
      data: {
        image: image,
        link: image.link,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `Could not find image with associated name: ${req.body.imageName}`,
    });
  }
};
