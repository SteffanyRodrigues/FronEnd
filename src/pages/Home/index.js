import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import SkillList from '../../components/SkillList/SkillList';
import AddSkillModal from '../../components/AddSkillModal/AddSkillModal';

const Home = () => {
  console.log('Home re-rendering');
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <SkillList/>
    <AddSkillModal/>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
