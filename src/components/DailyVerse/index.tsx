import { useState } from 'react';
import { Sun, RefreshCw } from 'lucide-react';
import { Container, Content, RefreshButton } from './styles';

const verses = [
    { text: "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.", ref: "Provérbios 4:23" },
    { text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro.", ref: "Jeremias 29:11" },
    { text: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que não se veem.", ref: "Hebreus 11:1" },
    { text: "Eis que faço novas todas as coisas. E acrescentou: Escreve, porque estas palavras são verdadeiras e fiéis.", ref: "Apocalipse 21:5" },
    { text: "Reveste-se de força e dignidade; sorri diante do futuro. Fala com sabedoria e ensina com amor. Cuida dos negócios de sua casa e não dá lugar à preguiça.", ref: "Provérbios 31:25" },
    { text: "Não se preocupem com nada, mas em todas as orações peçam a Deus o que vocês precisam e orem sempre com o coração agradecido.", ref: "Filipenses 4:6" },
    { text: "Não fui eu que ordenei a você? Seja forte e corajosa! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar", ref: "Josué 1:9" }
];

export function DailyVerse() {
    const [currentVerse, setCurrentVerse] = useState(() => {
        return verses[Math.floor(Math.random() * verses.length)];
    });

    function handleRefreshVerse() {
        let newIndex;
        let newVerse;

        do {
            newIndex = Math.floor(Math.random() * verses.length);
            newVerse = verses[newIndex];
        } while (newVerse.text === currentVerse.text);

        setCurrentVerse(newVerse);
    }

    return (
        <Container>
            <RefreshButton onClick={handleRefreshVerse} title="Nova Palavra">
                <RefreshCw size={16} />
            </RefreshButton>

            <Content>
                <h3><Sun size={18} /> Palavra do Dia</h3>
                <p>"{currentVerse.text}"</p>
                <span>— {currentVerse.ref}</span>
            </Content>
        </Container>
    );
}