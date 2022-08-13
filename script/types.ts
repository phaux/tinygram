export type TgApi = {
  methods: Record<string, TgMethod>;
  types: Record<string, TgType>;
};

export type TgMethod = {
  name: string;
  href: string;
  description: string[];
  fields?: TgField[];
  returns: string[];
};

export type TgField = {
  name: string;
  types: string[];
  required: boolean;
  description: string;
};

export type TgType = {
  name: string;
  href: string;
  description: string[];
  fields?: TgField[];
  subtypes?: string[];
  subtype_of?: string[];
};
