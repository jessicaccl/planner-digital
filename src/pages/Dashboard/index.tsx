import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { DailyVerse } from '../../components/DailyVerse';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';
import { NewTaskModal } from '../../components/NewTaskModal';
import { ContentGrid, SectionTitle, FloatingButton } from './styles';


interface Task {
    id: number;
    title: string;
    category: 'business' | 'personal' | 'kids';
    time: string;
    done: boolean;
}

export function Dashboard() {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem('planner-tasks');
        if (storedTasks) return JSON.parse(storedTasks);
        return [
            { id: 1, title: 'Reunião de Briefing', category: 'business', time: '10:00', done: false },
            { id: 2, title: 'Lanche das crianças', category: 'kids', time: '15:30', done: false },
        ];
    });

    useEffect(() => {
        localStorage.setItem('planner-tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleToggleTask(id: number) {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        );
        setTasks(newTasks);
    }

    function handleDeleteTask(id: number) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    function handleAddTask(title: string, category: 'business' | 'personal' | 'kids', time: string) {
        const newTask: Task = {
            id: Math.random(),
            title,
            category,
            time,
            done: false
        };
        setTasks([newTask, ...tasks]);
        setIsModalOpen(false);
    }

    const filteredTasks = tasks
        .filter(task => {
            if (location.pathname === '/') return true;
            if (location.pathname === '/business') return task.category === 'business';
            if (location.pathname === '/kids') return task.category === 'kids';
            if (location.pathname === '/personal') return task.category === 'personal';
            return true;
        })
        .sort((a, b) => {
            return a.time.localeCompare(b.time);
        });

    const pageTitle = {
        '/': 'Minhas Prioridades',
        '/business': 'Foco nos Negócios 🚀',
        '/kids': 'Família em Primeiro Lugar ❤️',
        '/personal': 'Meu Momento ✨'
    }[location.pathname] || 'Minhas Tarefas';

    return (
        <>
            <Header />
            <DailyVerse />
            <SectionTitle>{pageTitle}</SectionTitle>
            <ContentGrid>
                {filteredTasks.map(task => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        category={task.category}
                        time={task.time}
                        done={task.done}
                        onToggle={() => handleToggleTask(task.id)}
                        onDelete={() => handleDeleteTask(task.id)}
                    />
                ))}
                {filteredTasks.length === 0 && (
                    <p style={{ color: '#aaa', gridColumn: '1/-1', textAlign: 'center', marginTop: '40px' }}>
                        Nenhuma tarefa encontrada aqui. Que tal descansar? 🍃
                    </p>
                )}
            </ContentGrid>
            <FloatingButton onClick={() => setIsModalOpen(true)}>
                <Plus size={32} />
            </FloatingButton>
            <NewTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddTask}
            />
        </>
    );
}