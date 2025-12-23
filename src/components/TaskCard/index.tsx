import { Check, Trash } from 'lucide-react';
import { Container, CheckCircle, Content, CategoryTag, DeleteButton } from './styles';

const categoryColors = {
    business: '#8257e5',
    personal: '#fd7e14',
    kids: '#e83f5b',
};

const categoryLabels = {
    business: 'NEGÓCIOS',
    personal: 'PESSOAL',
    kids: 'KIDS & FAMÍLIA',
};

interface TaskCardProps {
    title: string;
    category: 'business' | 'personal' | 'kids';
    time: string;
    done: boolean;
    onToggle: () => void;
    onDelete: () => void;
}

export function TaskCard({ title, category, time, done, onToggle, onDelete }: TaskCardProps) {
    const cardColor = categoryColors[category];

    return (
        <Container
            $done={done}
            $categoryColor={cardColor}
        >

            <CheckCircle $done={done} onClick={onToggle}>
                {done && <Check size={14} color="#FFF" strokeWidth={3} />}
            </CheckCircle>

            <Content onClick={onToggle}>
                <h3 style={{ textDecoration: done ? 'line-through' : 'none' }}>
                    {title}
                </h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', alignItems: 'center' }}>
                    <CategoryTag $color={cardColor}>
                        {categoryLabels[category]}
                    </CategoryTag>

                    <span style={{ marginRight: '16px', fontSize: '12px', color: '#999' }}>
                        {time}
                    </span>
                </div>
            </Content>

            <DeleteButton
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
                title="Excluir tarefa"
            >
                <Trash size={18} />
            </DeleteButton>

        </Container>
    );
}