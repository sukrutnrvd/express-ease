import fs from "fs";
import path from "path";

const createNewPackageJsonObject = (
  packageJson: object,
  projectName: string
) => {
  return Object.assign(packageJson, {
    name: projectName,
    description: "",
    author: "",
    license: "",
    main: "dist/server.js",
  });
};

const updatePackageJson = (projectName: string) => {
  process.chdir(path.join(process.cwd(), projectName));
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const newPackageJson = createNewPackageJsonObject(packageJson, projectName);
  fs.writeFileSync(packageJsonPath, JSON.stringify(newPackageJson, null, 2));
};

export default updatePackageJson;
