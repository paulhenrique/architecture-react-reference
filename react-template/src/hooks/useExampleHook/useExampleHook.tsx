/**
 * @file useExampleHook.tsx
 * @description useExampleHook hook.
 */
interface UseExampleHookProps {
  // Params here
  fromProps: string;
}

export const useExampleHook = ({ fromProps }: UseExampleHookProps) => {
  const exampleProperty = fromProps + "example";

  return {
    exampleProperty,
  };
};

export default useExampleHook;
