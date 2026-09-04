export type ExamType = 'JEE Advanced' | 'JEE Main' | 'IIT Admission' | 'All';

export type ResultCategory = 'All' | 'JEE Advanced' | 'JEE Main' | 'IIT Selections' | 'Top Ranks';

export interface StudentResult {
  id: string;
  studentName: string;
  exam: 'JEE Advanced' | 'JEE Main' | 'IIT Selections' | 'Top Ranks';
  achievement: string; // e.g. "AIR 201" or "AIR 1400"
  achievementType: 'Rank' | 'Percentile' | 'Admission' | 'Top Performer';
  college?: string; // e.g. "IIT Delhi (IITD)", "IIT Selection"
  year?: string;
  isPlaceholder?: boolean;
  featured?: boolean;
  category: ResultCategory;
  note?: string;
}

export interface ProgramInfo {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  description: string;
  keyHighlights: string[];
  topics: string[];
  badge: string;
  ctaText: string;
}

export interface MathCategory {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
  topics: string[];
  keyFormula: string;
  description: string;
  conceptHighlight: string;
}
