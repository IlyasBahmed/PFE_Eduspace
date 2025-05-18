import { create } from 'zustand';

const useLiveStore = create((set) => ({
  lives: [],
  addLive: (newLive) => set((state) => ({
    lives: [
      ...state.lives,
      {
        ...newLive,
        id: Date.now().toString(),
        status: 'Upcoming',
        password: newLive.isPrivate ? newLive.password : null,
        createdAt: new Date().toISOString(),
        participants: 0
      }
    ]
  })),
  updateLive: (id, updates) => set((state) => ({
    lives: state.lives.map(live => 
      live.id === id ? {...live, ...updates} : live
    )
  })),
  removeLive: (id) => set((state) => ({
    lives: state.lives.filter(live => live.id !== id)
  }))
}));

export default useLiveStore;