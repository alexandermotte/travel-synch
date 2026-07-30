export type TermsBlock =
  | { type: 'p'; html: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'dl'; items: { term: string; def: string }[] };

export type TermsSection = {
  id: string;
  title: string;
  blocks: TermsBlock[];
};

export type TermsContent = {
  badge: string;
  title: string;
  lastUpdated: string;
  sections: TermsSection[];
  withdrawalForm: {
    title: string;
    blocks: TermsBlock[];
  };
};
