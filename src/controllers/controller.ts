import tryCatch from "@utils/utils";

const getController = tryCatch(async (req, res, next) => {
  res.json({
    message: "Hello Express",
  });
});

const postController = tryCatch(async (req, res, next) => {
  res.json({
    message: "Hello Express",
  });
});

export { getController, postController };
