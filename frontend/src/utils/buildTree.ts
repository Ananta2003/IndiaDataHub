export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

type NestedObject = { [key: string]: NestedObject };

export function buildTree(obj: NestedObject): TreeNode[] {
  return Object.entries(obj).map(([key, value]) => ({
    name: key,
    children: Object.keys(value).length > 0 ? buildTree(value) : undefined
  }));
}
