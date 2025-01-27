export const useHandleWaitList = (): (() => void) => {
  const handleJoinWaitList = (): void => {
    // handle wait list logic
    console.log("User joined the waitlist");
  };

  return handleJoinWaitList;
};
