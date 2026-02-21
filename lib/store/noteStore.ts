import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { NewNote } from '@/types/note';

interface NoteDraftState {
    note: NewNote;
    setDraft: (obj: NewNote) => void;
    clearDraft: () => void;
}

const initialDraft: NewNote = {
    title: '',
    content: '',
    tag: 'Todo',
};

export const useDraft = create<NoteDraftState>()(
    persist(
        (set) => ({
            note: initialDraft,

            setDraft: (obj) =>
                set(() => ({
                    note: obj,
                })),

            clearDraft: () =>
                set(() => ({
                    note: initialDraft,
                })),
        }),
        {
            name: 'note-draft',
            partialize: (state) => ({
                note: state.note,
            }),
        }
    )
);