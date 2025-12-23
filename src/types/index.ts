export type Category = 'business' | 'personal' | 'kids' | 'health';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  category: Category;
  dueDate: Date;
}

export interface PlannerState {
  tasks: Task[];
  theme: 'light' | 'dark';
}