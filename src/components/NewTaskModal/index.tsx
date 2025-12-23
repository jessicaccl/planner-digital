import { useState } from 'react';
import { Overlay, ModalContainer, InputGroup, ButtonGroup, SaveButton, CancelButton } from './styles';
import { X } from 'lucide-react';

interface NewTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (title: string, category: 'business' | 'personal' | 'kids', time: string) => void;
}

export function NewTaskModal({ isOpen, onClose, onSave }: NewTaskModalProps) {
    if (!isOpen) return null;

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState<'business' | 'personal' | 'kids'>('business');
    const [time, setTime] = useState('');

    function handleSubmit() {
        if (!title || !time) return;
        onSave(title, category, time);
        setTitle('');
        setTime('');
        onClose();
    }

    return (
        <Overlay>
            <ModalContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2>Nova Tarefa</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}>
                        <X size={24} />
                    </button>
                </div>

                <InputGroup>
                    <label>O que você precisa fazer?</label>
                    <input
                        placeholder="Ex: Comprar material escolar"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        autoFocus
                    />
                </InputGroup>

                <InputGroup>
                    <label>Categoria</label>
                    <select value={category} onChange={e => setCategory(e.target.value as any)}>
                        <option value="business">Negócios</option>
                        <option value="personal">Pessoal</option>
                        <option value="kids">Kids & Família</option>
                    </select>
                </InputGroup>

                <InputGroup>
                    <label>Horário</label>
                    <input
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </InputGroup>

                <ButtonGroup>
                    <CancelButton onClick={onClose}>Cancelar</CancelButton>
                    <SaveButton onClick={handleSubmit}>Criar Tarefa</SaveButton>
                </ButtonGroup>

            </ModalContainer>
        </Overlay>
    );
}