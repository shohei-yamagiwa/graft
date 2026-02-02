import path from "path";

export type AddCommandOptions = {
  // TODO: Add source destination path option for flexibility
};

export async function addCommand(
  url: string,
  name: string,
  options?: AddCommandOptions,
) {
  const root = process.cwd();

  const destination = path.join(root, "src/vendor", name);

  // TODO: Implement the logic to add the dependency
}
