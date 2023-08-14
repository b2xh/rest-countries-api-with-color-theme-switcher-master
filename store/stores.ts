import { create } from "zustand";
import { IAPI } from "@/libs/api/types";

type IStateData = {
  lastUpdate: string;
  data: IAPI[];
};

interface IState {
  loading: boolean;
  setLoading: (_state: boolean) => void;
  data: IStateData;
  setData: (_data: IStateData) => void;
  fetchData: () => Promise<void>;
}

export const store = create<IState>((set, get) => ({
  loading: true,
  setLoading: (state) => set(() => ({ loading: state })),
  data: { lastUpdate: "", data: [] },
  setData: (data) => set(() => ({ data })),
  fetchData: async () => {
    const { setData, setLoading } = get();
    try {
      setLoading(true);
      const res = await fetch("/api");
      const data = await res.json();
      setData(data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    }
  },
}));
