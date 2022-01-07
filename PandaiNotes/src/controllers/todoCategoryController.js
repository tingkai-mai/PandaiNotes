const Cat = require("./../models/todoCategoryModel");

exports.createCat = async (req, res) => {
  try {
    const cat = await Cat.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        cat: cat,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.updateCat = async (req, res) => {
  try {
    const cat = await Cat.findByIdAndUpdate(req.params.catId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        cat: cat,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find().populate({
      path: "todo",
      populate: { path: "module" },
      select: "-__v",
    });
    res.status(200).json({
      status: "success",
      data: {
        cats: cats,
        todoObjects: cats.map((el) => el.todo),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getCat = async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.catId).populate({
      path: "todo",
      select: "-__v",
    });
    res.status(200).json({
      status: "success",
      data: {
        cat: cat,
        content: cat.todo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: `Could not find category with associated id: ${req.params.catId}`,
    });
  }
};
