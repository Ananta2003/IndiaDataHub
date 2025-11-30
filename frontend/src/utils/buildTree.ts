export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export function buildTree(obj: any): TreeNode[] {
  return Object.entries(obj).map(([key, value]) => ({
    name: key,
    children: Object.keys(value).length > 0 ? buildTree(value) : undefined
  }));
}