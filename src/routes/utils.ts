import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

interface NavigateProps {
  (name: string, params?: Record<string, unknown>): void;
}

export const navigate: NavigateProps = (name, params) => {
  if (navigationRef.current) {
    (navigationRef.current.navigate as any)(name, params);
  }
};

export const navigatePop = (): void => {
  if (navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop());
  }
};

export const popToTop = (): void => {
  if (navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
};

export const goBack = (): void => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};
