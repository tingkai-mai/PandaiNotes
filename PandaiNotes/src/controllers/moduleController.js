const Module = require("./../models/moduleModel");

exports.createModule = async (req, res) => {
  try {
    const createdModule = await Module.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        module: createdModule,
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

exports.updateModule = async (req, res) => {
  try {
    const updatedModule = await Module.findByIdAndUpdate(
      req.params.moduleId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        module: updatedModule,
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

exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.status(200).json({
      status: "success",
      data: {
        modules: modules,
        codes: modules.map((el) => el.code),
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

exports.getModule = async (req, res) => {
  console.log(req.params.moduleId);
  try {
    const fetchedModule = await Module.findById(req.params.moduleId);
    res.status(200).json({
      status: "success",
      data: {
        module: fetchedModule,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `Could not find module with associated ID: ${req.params.moduleId}`,
    });
  }
};
