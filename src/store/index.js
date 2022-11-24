import create from 'zustand'

export const useButtonSide = create((set) => ({
  status: false,
  setStatus: () => set((state) => ({
    status: state.status = true
  })),
  removeStatus: () => set(({ status: false }))
}))

export const useUrlPathname = create((set) => ({
  path: '',
  setPath: () => {
    const url = window.location.pathname.split('/')[1];
    if (url !== '') {
      set(() => ({ path: url }))
    } else {
      set(() => ({ path: 'home' }))
    }
  }
}))
