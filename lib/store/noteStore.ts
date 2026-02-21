import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { NewNote } from '@/types/note';

interface NoteDraftState {
    draft: NewNote;
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
        set => ({
            draft: initialDraft,

            setDraft: obj =>
                set(() => ({
                    draft: obj,
                })),

            clearDraft: () =>
                set(() => ({
                    draft: initialDraft,
                })),
        }),
        {
            name: 'note-draft',
            partialize: state => ({
                draft: state.draft,
            }),
        }
    )
);
