import { create } from 'zustand';

interface ProfileState {
  profileImage: string | null;
  nickname: string;
  bio: string;
  setProfile: (
    key: keyof Omit<ProfileState, 'setProfile' | 'resetProfile'>,
    value: string | null
  ) => void;
  resetProfile: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profileImage: null,
  nickname: '',
  bio: '',

  setProfile: (key, value) => {
    const validKeys: (keyof Omit<
      ProfileState,
      'setProfile' | 'resetProfile'
    >)[] = ['profileImage', 'nickname', 'bio'];

    if (validKeys.includes(key)) {
      set((state) => ({
        ...state,
        [key]: value,
      }));
    } else {
      console.warn(`알 수 없는 key: ${key}`);
    }
  },

  resetProfile: () =>
    set(() => ({
      profileImage: null,
      nickname: '',
      bio: '',
    })),
}));
