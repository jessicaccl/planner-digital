import { useState, useEffect } from 'react';
import { Container, Greeting, DateDisplay } from './styles';

export function Header() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        }).format(now);

        setCurrentDate(formatted.charAt(0).toUpperCase() + formatted.slice(1));
    }, []);

    return (
        <Container>
            
            <Greeting>
                <h1>Olá, Jéssica!</h1>
                <p>Vamos organizar suas prioridades de hoje?</p>
            </Greeting>

            <DateDisplay>
                {currentDate}
            </DateDisplay>
        </Container>
    );
}