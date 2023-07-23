import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./index";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
