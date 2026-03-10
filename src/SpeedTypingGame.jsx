import TypingArea from "./TypingArea.jsx";
import {useEffect, useRef, useState} from "react";
import confetti from "canvas-confetti";

    const MAX_TIME = 60;

const SpeedTypingGame = () => {

    const quotes = [
        "Life is what happens to us while we are making other plans.",
        "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        "It is our choices, Harry, that show what we truly are, far more than our abilities."
    ];
    const [currentQuote, setCurrentQuote] = useState(() =>
        quotes[Math.floor(Math.random() * quotes.length)]);
    const [userInput, setUserInput] = useState("");
    const [timeLeft, setTimeLeft] = useState(MAX_TIME);
    const [isTyping, setIsTyping] = useState(false);
    const [mistakes, setMistakes] = useState(0);
    const inputRef = useRef(null);

    const celebrate = () => {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.7 },
        });
    }

    const resetGame = () => {
        setIsTyping(false);
        setTimeLeft(MAX_TIME);
        setUserInput("");
        setMistakes(0);
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        inputRef.current?.focus();
    };

    const renderCharacters = () => {
        return currentQuote.split("").map((char, index) => {
            let colorClass = "text-gray-400";

            if (index < userInput.length) {
                colorClass = userInput[index] === char
                    ? "text-green-500"
                    : "text-red-500 bg-red-100 rounded";
            }

            const isActive = index === userInput.length;

            return (
                <span
                    key={index}
                    className={`text-2xl font-mono transition-colors ${colorClass} ${isActive ? 'border-b-2 border-blue-500 animate-pulse' : ''}`}
                >
                    {char}
                </span>
            );
        });
    };

    const handleChange = (e) => {
        const typedText = e.target.value;

        if (!isTyping && typedText.length > 0) {
            setIsTyping(true);
        }

        if (timeLeft === 0 || typedText.length > currentQuote.length) return;

        if (typedText.length > userInput.length) {
            const lastCharTyped = typedText.slice(-1);
            const expectedChar = currentQuote[typedText.length - 1];
            if (lastCharTyped !== expectedChar) {
                setMistakes(prev => prev + 1);
            }
        }

        setUserInput(typedText);

        if (typedText === currentQuote) {
            setIsTyping(false);
            celebrate();
            inputRef.current?.blur();
        }
    };

    useEffect(() => {
        let interval;
        if (isTyping && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        setIsTyping(false);
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isTyping]);

    const timeFromStart = MAX_TIME - timeLeft;
    const wordsTyped = userInput.length / 5;
    const wpm = timeFromStart > 0? Math.floor((wordsTyped / timeFromStart) * 60) : 0;

    return (
        <div
            className="mt-12 cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            <input
                type="text"
                ref={inputRef}
                className="opacity-0 absolute -z-10"
                value={userInput}
                onChange={handleChange}
                autoFocus
            />

            <TypingArea
                timeLeft={timeLeft}
                mistakes={mistakes}
                wpm={wpm}
                resetGame={resetGame}
            >
                {currentQuote ? renderCharacters() : <p className="text-gray-400 text-center animate-pulse">Завантаження цитат...</p>}
            </TypingArea>
        </div>
    );
}
export default SpeedTypingGame;