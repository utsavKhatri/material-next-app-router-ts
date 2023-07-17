import create from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface StoreProps {
  tasks: taskProps[];
  addTask: (task: taskProps) => void;
  deleteTask: (title: string) => void;
  draggedTask: string | null;
  setDraggedTask: (title: string | null) => void;
  moveTask: (task: taskProps) => void;
}

interface taskProps {
  title: string;
  state: string;
}

export const useStore = create<StoreProps>()(
  devtools(
    persist(
      (set) => ({
        tasks: [
          {
            title: 'Test task',
            state: 'ONGOING',
          },
        ],
        addTask: (task: taskProps) => {
          set((state: { tasks: any }) => {
            return {
              tasks: [...state.tasks, task],
            };
          });
        },
        deleteTask: (title: string) => {
          set((state: { tasks: any[] }) => {
            return {
              tasks: state.tasks.filter(
                (t: { title: string }) => t.title !== title
              ),
            };
          });
        },
        draggedTask: null,
        setDraggedTask: (title: string | null) => {
          set({ draggedTask: title });
        },
        moveTask: (task: taskProps) => {
          set((store) => ({
            tasks: store.tasks.map((t: taskProps) =>
              t.title === task.title ? task : t
            ),
          }));
        },
      }),
      {
        name: 'tasks',
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
