import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { TAppDispatch, TRoutState } from './store';
import { useSelector } from 'react-redux';

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRoutState> = useSelector;
