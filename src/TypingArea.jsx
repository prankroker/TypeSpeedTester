
const TypingArea = ({
                        children,
                        timeLeft,
                        mistakes,
                        wpm,
                        resetGame,
                    }) => {

  return (
    <>
        {/*Обгортка*/}
      <div className="bg-white max-w-2xl rounded-2xl p-10 shadow-xl transition-all hover:shadow-2xl">
          {/*Основний блок*/}
          <div className="p-8 border-b-2 border-black border-solid">
              <p>{children}</p>
          </div>
          {/*Функціональний блок*/}
          <div className="p-8 rounded-2xl flex flex-row gap-8 justify-between">
              <ul className="flex flex-row items-center gap-8">
                  <li className="flex flex-col items-center">
                      <p>Часу лишилось:</p>
                      <span className="font-bold">{timeLeft}</span>
                  </li>
                  <li className="flex flex-col items-center">
                      <p>Помилки:</p>
                      <span className="font-bold">{mistakes}</span>
                  </li>
                  <li className="flex flex-col items-center">
                      <p>Слів на хв:</p>
                      <span className="font-bold">{wpm}</span>
                  </li>
              </ul>
              <button
                  className="bg-blue-400 rounded-2xl p-6 pt-2 pb-2 text-white transition-all hover:bg-blue-500"
                  onClick={resetGame}
              >Заново</button>
          </div>
      </div>
    </>
  )
}

export default TypingArea
