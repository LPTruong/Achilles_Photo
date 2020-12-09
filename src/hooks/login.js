const { useState } = require("react");

const useLogin = () => {
  const [isRegisterd, setIsRegisted] = useState(true);

  const setRegisterIfMlaTruong = (name) => {
    if (name === "Truong") {
      setIsRegisted(false);
    }
  };

  return isRegisterd, setIsRegisted, setRegisterIfMlaTruong;
};

export default useLogin;
