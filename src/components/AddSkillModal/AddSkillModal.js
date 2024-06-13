import React, { useState, useEffect } from 'react';
import {ModalOverlay, ModalContent, Form, Label, Select } from '../AddSkillModal/AddSkillModal.styles';
import {Button} from '../Button/styles';

const AddSkillModal = ({ onClose, onSave }) => {
  const [availableSkills, setAvailableSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
     fetch('https://api.example.com/skills')
      .then(response => response.json())
      .then(data => setAvailableSkills(data));
  }, []);


  const handleSave = () => {
    const skill = availableSkills.find(skill => skill.id === selectedSkill);
    onSave(skill);
  };
  const handleSaveSkill = (skill) => {
 
    console.log('Skill saved:', skill);
    setShowModal(false);
  };

  return (
    
    <ModalOverlay>
    <ModalContent>
    <h2>Adicionar Mood</h2>
    <Form>
          <Label htmlFor="skill">Inclua na sua lista:</Label>
          <Select 
            id="skill" 
            value={selectedSkill} 
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="" disabled>Selecione</option>
            {availableSkills.map(skill => (
              <option key={skill.id} value={skill.id}>
                {skill.name}
              </option>
            ))}
          </Select>
          
            <Button onClick={handleSave}>Salve</Button>
            <Button onClick={onClose}>Cancele</Button>
            {showModal && (
        <AddSkillModal 
          onClose={() => setShowModal(false)} 
          onSave={handleSaveSkill} 
        />
      )}

        </Form>
    </ModalContent>
  </ModalOverlay>
);
};
export default AddSkillModal;
