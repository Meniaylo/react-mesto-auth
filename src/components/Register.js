import { Link } from "react-router-dom";
import SignPage from "./SignPage";


const Register = ({onRegister}) => {

  return (
      <SignPage
        title="Регистрация"
        submitText="Зарегистрироваться"
        submitFunc={onRegister}
      >
      </SignPage>
  );
};

export default Register;
