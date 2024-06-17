import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import {SkillItem,SkillImage,SkillDetails,SkillName,SkillLevel,SkillDescription,SkillSelect} from '../../components/SkillList/styles';
//import SkillList from '../../components/SkillList/SkillList';
//import AddSkillModal from '../../components/AddSkillModal/AddSkillModal';

const Home = () => {
  console.log('Home re-rendering');
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([
       
   { id: 1, name: 'FOFURA', level: 'BÁSICO', description: 'MOSTRE O NIVEL DO SEU ENCANTO PRA UMA SEGUNDA FEIRA.', imageUrl: 'https://a-static.mlcdn.com.br/800x560/docinho-meninas-super-poderosas-papel-de-arroz-a4-mec-art/mecart/15808316265/5518c0ee2d0d4ecde88866ff1b678ed3.jpeg' },
    { id: 2, name: 'FORÇA', level: 'INTERMEDIARIO', description: 'SUA FORÇA DEPOIS DE UMA CREATINA DA GROW.', imageUrl: 'https://img.elo7.com.br/product/685x685/1B51178/totem-scooby-doo-salsicha-0-5x1-75m-sd04-digital.jpg' },
    { id: 3, name: 'CORAGEM', level: 'AVANÇADO', description: 'MOSTRE A SUA CORAGEM COMO EM UMA SEXTA 13', imageUrl: 'https://www.jornalopcao.com.br/assets/2018/11/coragem-o-cao-covarde-cn-620x310-1.jpg' },
    { id: 4, name: 'ANIMAÇÃO', level: 'AVANÇADO', description: 'SUA BATERIA SOCIAL DEPOIS DAS 00:00', imageUrl: 'https://i.pinimg.com/736x/e7/8c/0d/e78c0d599913316df469b3e7606dde8c.jpg' },

  ]);

  const handleLevelChange = (id, newLevel) => {
    setSkills(prevSkills =>
      prevSkills.map(skill =>
        skill.id === id ? { ...skill, level: newLevel } : skill
      )
    );
  };

  return (
    <C.Container>
    <h2>MOSTRE O NIVEL DO SEU HUMOR PARA HOJE</h2>
      
      {skills.map(skill => (
      <SkillItem key={skill.id}>
     <SkillImage src={skill.imageUrl} alt={skill.name} className="skill-image" />
     <SkillDetails>
     <SkillName>{skill.name}</SkillName>
          <SkillLevel>Level: {skill.level}</SkillLevel>
          <SkillDescription>{skill.description}</SkillDescription>
          <SkillSelect
              value={skill.level}
              onChange={(e) => handleLevelChange(skill.id, e.target.value)}
            >
              <option value="Basico">BÁSICO</option>
              <option value="Intermediario">INTERMEDIÁRIO</option>
              <option value="Avançado">AVANÇADO</option>
            

              </SkillSelect>
        </SkillDetails>
      </SkillItem>

      ))}
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
