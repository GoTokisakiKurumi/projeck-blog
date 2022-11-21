import create from 'zustand'

const useButtonSide = create((set) => ({
  status: false,
  setStatus: () => set((state) => ({ status: state.status = true })),
  removeStatus: () => set(({ status: false }))
}))

export default useButtonSide;
