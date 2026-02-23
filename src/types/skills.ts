/**
 * Hierarchical skills structure: stack → groups → items
 */
export type SkillGroup = {
  group: string;
  items: string[];
};

export type SkillArea = {
  stack: string;
  groups: SkillGroup[];
};

export type SkillsDictionary = {
  title: string;
  areas: SkillArea[];
};
